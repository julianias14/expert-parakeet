import { auth, db } from "./firebase.js";
import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { javaQuestions } from "./java-questions.js";
import { pythonQuestions } from "./python-questions.js";
import { htmlQuestions } from "./html-questions.js";

// Map URL parameter to question bank
const questionBanks = {
  'java': javaQuestions,
  'python': pythonQuestions,
  'html': htmlQuestions
};

// Get level from URL
const urlParams = new URLSearchParams(window.location.search);
const nodeId = urlParams.get('nodeId');  // e.g., "java_loops", "html_basic", "python_variables"

// Parse level from nodeId
let currentLevel = 'html';  // default
if (nodeId) {
  if (nodeId.startsWith('java_')) currentLevel = 'java';
  else if (nodeId.startsWith('python_')) currentLevel = 'python';
  else if (nodeId.startsWith('html_') || nodeId.startsWith('css_')) currentLevel = 'html';
}

let questions = questionBanks[currentLevel] || javaQuestions;
console.log(`Loaded ${currentLevel} questions:`, questions.length);

// Track which node we're completing
let currentUserId = null;

document.addEventListener("DOMContentLoaded", () => {
  // Check auth
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      window.location.href = "index.html";
      return;
    }
    currentUserId = user.uid;
    
    // Update level indicator
    const levelIndicator = document.getElementById("level-indicator");
    if (levelIndicator) {
      levelIndicator.textContent = `⚡ ${currentLevel.toUpperCase()} QUEST ⚡`;
      levelIndicator.style.cssText = "font-size: 8px; text-align: center; margin-bottom: 12px; color: #f7d44a;";
    }
    
    startQuiz();
  });
  
  // Back button
  const backBtn = document.getElementById("back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "home.html";
    });
  }
});

let current = 0;
let score = 0;
let hp = 75;
let selected = null;
let answered = false;
let questionsForNode = [];  // Filtered questions for this specific node

function startQuiz() {
  // Filter questions by nodeId (only show questions matching this node)
  if (nodeId) {
    // Extract topic from nodeId (e.g., "java_loops" -> "loops")
    const topicPart = nodeId.split('_').slice(1).join('_');
    questionsForNode = questions.filter(q => q.topic && q.topic.toLowerCase().includes(topicPart.toLowerCase()));
    
    // If no matching questions, fallback to first 5
    if (questionsForNode.length === 0) {
      questionsForNode = questions.slice(0, 5);
    }
  } else {
    questionsForNode = questions.slice(0, 5);
  }
  
  console.log(`Loaded ${questionsForNode.length} questions for node ${nodeId}`);
  
  const petFace = document.getElementById("pet-face");
  const hpBar = document.getElementById("hp-bar");
  const hpLabel = document.getElementById("hp-label");
  const qCounter = document.getElementById("q-counter");
  const scoreDisp = document.getElementById("score-display");
  const typeBadge = document.getElementById("type-badge");
  const questionText = document.getElementById("question-text");
  const resultFlash = document.getElementById("result-flash");
  const choicesDiv = document.getElementById("choices");
  const fillSection = document.getElementById("fill-section");
  const fillInput = document.getElementById("fill-input");
  const submitBtn = document.getElementById("submit-btn");

  if (!petFace || !hpBar || !hpLabel || !qCounter || !scoreDisp ||
      !typeBadge || !questionText || !resultFlash ||
      !choicesDiv || !fillSection || !fillInput || !submitBtn) {
    console.error("Missing DOM elements — check your HTML IDs");
    return;
  }

  function loadQuestion() {
    if (current >= questionsForNode.length) {
      // Quiz complete!
      completeLevel();
      return;
    }
    
    const q = questionsForNode[current];
    answered = false;
    selected = null;

    resultFlash.className = "result-flash";
    fillInput.value = "";
    fillInput.style.borderColor = "";
    fillInput.style.color = "";

    qCounter.textContent = `Q ${current + 1} / ${questionsForNode.length}`;
    questionText.textContent = q.question;

    if (q.type === "mc") {
      typeBadge.textContent = "Multiple Choice";
      typeBadge.className = "type-badge mc";
    } else if (q.type === "tf") {
      typeBadge.textContent = "True or False";
      typeBadge.className = "type-badge tf";
    } else {
      typeBadge.textContent = "Fill in the Blank";
      typeBadge.className = "type-badge fill";
    }

    choicesDiv.innerHTML = "";
    choicesDiv.classList.add("hidden");
    fillSection.classList.add("hidden");

    if (q.type === "mc" || q.type === "tf") {
      choicesDiv.className = `choices-grid ${q.type === "mc" ? "mc-grid" : "tf-grid"}`;
      choicesDiv.classList.remove("hidden");

      q.choices.forEach((choice, i) => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.textContent = choice;

        btn.addEventListener("click", () => {
          if (answered) return;
          selected = i;
          document.querySelectorAll(".choice-btn").forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
        });

        choicesDiv.appendChild(btn);
      });
    } else {
      fillSection.classList.remove("hidden");
      setTimeout(() => fillInput.focus(), 50);
    }
  }

  function updatePet(correct) {
    if (correct) {
      hp = Math.min(100, hp + 10);
      petFace.textContent = "😊";
    } else {
      hp = Math.max(0, hp - 8);
      petFace.textContent = "😢";
    }
    hpBar.style.width = hp + "%";
    hpLabel.textContent = `HP: ${hp} / 100`;
    setTimeout(() => { petFace.textContent = "🐣"; }, 900);
  }

  async function completeLevel() {
    // Calculate final score percentage
    const percent = Math.round((score / questionsForNode.length) * 100);
    const passed = percent >= 70;  // Need 70% to pass
    
    resultFlash.textContent = passed ? `🎉 LEVEL COMPLETE! ${percent}% 🎉` : `💀 FAILED! ${percent}% - Try Again 💀`;
    resultFlash.className = `result-flash ${passed ? "correct" : "wrong"} show`;
    
    // Disable submit button
    const submitBtnEl = document.getElementById("submit-btn");
    if (submitBtnEl) submitBtnEl.disabled = true;
    
    if (passed && currentUserId && nodeId) {
      // Save completion to Firebase
      try {
        const userRef = doc(db, "users", currentUserId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          let progress = userSnap.data().progress || { html: [], python: [], java: [] };
          if (!progress[currentLevel]) progress[currentLevel] = [];
          
          if (!progress[currentLevel].includes(nodeId)) {
            progress[currentLevel].push(nodeId);
            
            // Add XP
            let xp = userSnap.data().xp || 0;
            xp += 100;
            
            await updateDoc(userRef, { 
              progress: progress,
              xp: xp
            });
            console.log(`Saved completion for ${nodeId}`);
          }
        }
      } catch (err) {
        console.error("Failed to save progress:", err);
      }
    }
    
    // Redirect back to home after 2 seconds
    setTimeout(() => {
      window.location.href = "home.html";
    }, 2500);
  }

  submitBtn.addEventListener("click", () => {
    if (answered) return;
    if (current >= questionsForNode.length) return;
    
    const q = questionsForNode[current];
    let correct = false;

    if (q.type === "mc" || q.type === "tf") {
      if (selected === null) return;
      correct = selected === q.correct;

      document.querySelectorAll(".choice-btn").forEach((btn, i) => {
        btn.classList.remove("selected");
        if (i === q.correct) btn.classList.add("correct");
        else if (i === selected && !correct) btn.classList.add("wrong");
      });
    } else {
      const userVal = fillInput.value.trim().toLowerCase();
      const expected = q.answer.toLowerCase();
      correct = userVal === expected;
      fillInput.style.borderColor = correct ? "#00ff88" : "#ff4444";
      fillInput.style.color = correct ? "#00ff88" : "#ff4444";
    }

    answered = true;
    if (correct) score++;
    scoreDisp.textContent = `Score: ${score}`;

    resultFlash.textContent = correct ? "✓ Correct!" : "✗ Wrong!";
    resultFlash.className = `result-flash ${correct ? "correct" : "wrong"} show`;

    updatePet(correct);

    setTimeout(() => {
      current++;
      loadQuestion();
    }, 1300);
  });

  loadQuestion();
}