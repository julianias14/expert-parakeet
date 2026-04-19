// ─────────────────────────────────────────────────────────────────────────────
// Firebase imports for saving progress
// ─────────────────────────────────────────────────────────────────────────────
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { getFirestore, doc, updateDoc, arrayUnion, getDoc } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCZFMjYBeptcSflFOtRMMO7WKFJ21xwwrk",
  authDomain: "expert-parakeet.firebaseapp.com",
  projectId: "expert-parakeet",
  storageBucket: "expert-parakeet.appspot.com",
  messagingSenderId: "488940113425",
  appId: "1:488940113425:web:79f9e491bb89ba08abebb0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let currentUserId = null;
let currentLang = null;
let currentNodeId = null;
let currentType = null;

// ─────────────────────────────────────────────────────────────────────────────
// Helper function to get the next node ID based on current node
// ─────────────────────────────────────────────────────────────────────────────
function getNextNodeId(currentNodeId, lang) {
    // Define the progression order for each language
    const progressions = {
        html: [
            "html_file_setup",
            "html_basic_elements", 
            "html_ids",
            "html_classes",
            "html_links",
            "html_images",
            "html_comments",
            "html_divs",
            "html_layout",
            "html_styles",
            "html_buttons",
            "html_iframes",
            "html_tables"
        ],
        python: [
            "py_vars",
            "py_conditionals",
            "py_loops", 
            "py_lists",
            "py_dict",
            "py_functions",
            "py_files",
            "py_oop"
        ],
        java: [
            "java_vars",
            "java_arrays",
            "java_loops",
            "java_io",
            "java_functions",
            "java_sort",
            "java_oop",
            "java_stacks",
            "java_linked",
            "java_hash",
            "java_bst",
            "java_priority",
            "java_graphs"
        ]
    };
    
    const langProgression = progressions[lang];
    if (!langProgression) return null;
    
    const currentIndex = langProgression.indexOf(currentNodeId);
    if (currentIndex === -1 || currentIndex === langProgression.length - 1) {
        return null; // No next level
    }
    
    return langProgression[currentIndex + 1];
}

// ─────────────────────────────────────────────────────────────────────────────
// AUTO NODE MAPPING (NO MORE "UNKNOWN NODE")
// ─────────────────────────────────────────────────────────────────────────────

function getMapping(nodeId) {
  // ── HTML ──
  // Exact topic strings from html-questions.js:
  // "file set-up", "basic elements", "ids", "classes", "links",
  // "images", "comments", "divs", "layout", "styles",
  // "buttons", "iframes", "tables"
  if (nodeId.startsWith("html_")) {
    let topic = "file set-up"; // default

    if      (nodeId.includes("basic"))    topic = "basic elements";
    else if (nodeId.includes("ids"))      topic = "ids";
    else if (nodeId.includes("classes"))  topic = "classes";
    else if (nodeId.includes("links"))    topic = "links";
    else if (nodeId.includes("img"))      topic = "images";
    else if (nodeId.includes("comments")) topic = "comments";
    else if (nodeId.includes("divs"))     topic = "divs";
    else if (nodeId.includes("layout"))   topic = "layout";
    else if (nodeId.includes("css"))      topic = "styles";
    else if (nodeId.includes("buttons"))  topic = "buttons";
    else if (nodeId.includes("iframes"))  topic = "iframes";
    else if (nodeId.includes("tables"))   topic = "tables";

    return { file: "./html-questions.js", topic };
  }

  // ── PYTHON ──
  // Exact topic strings from python-questions.js:
  // "basic_python", "conditionals", "loops", "lists_tuples",
  // "dictionaries", "functions", "io", "advanced_python"
  if (nodeId.startsWith("py_")) {
    let topic = "basic_python"; // default

    if      (nodeId.includes("vars"))   topic = "basic_python";
    else if (nodeId.includes("syntax")) topic = "basic_python";
    else if (nodeId.includes("loops"))  topic = "loops";
    else if (nodeId.includes("lists"))  topic = "lists_tuples";
    else if (nodeId.includes("dict"))   topic = "dictionaries";
    else if (nodeId.includes("func"))   topic = "functions";
    else if (nodeId.includes("files"))  topic = "io";
    else if (nodeId.includes("oop"))    topic = "advanced_python";
    else if (nodeId.includes("libs"))   topic = "advanced_python";

    return { file: "./python-questions.js", topic };
  }

  // ── JAVA ──
  // Exact topic strings from java-questions.js:
  // "basic_java", "conditionals", "arrays", "loops", "io",
  // "functions", "elementary_sorts", "oop", "stacks_queues",
  // "linked_lists", "hashmaps", "bst", "priority_queues", "graphs"
  if (nodeId.startsWith("java_")) {
    let topic = "basic_java"; // default

    if      (nodeId.includes("vars"))     topic = "conditionals";
    else if (nodeId.includes("arrays"))   topic = "arrays";
    else if (nodeId.includes("loops"))    topic = "loops";
    else if (nodeId.includes("io"))       topic = "io";
    else if (nodeId.includes("function")) topic = "functions";
    else if (nodeId.includes("sort"))     topic = "elementary_sorts";
    else if (nodeId.includes("oop"))      topic = "oop";
    else if (nodeId.includes("stacks"))   topic = "stacks_queues";
    else if (nodeId.includes("linked"))   topic = "linked_lists";
    else if (nodeId.includes("hash"))     topic = "hashmaps";
    else if (nodeId.includes("bst"))      topic = "bst";
    else if (nodeId.includes("priority")) topic = "priority_queues";
    else if (nodeId.includes("graph"))    topic = "graphs";

    return { file: "./java-questions.js", topic };
  }

  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Read URL parameters
// ─────────────────────────────────────────────────────────────────────────────
const urlParams = new URLSearchParams(window.location.search);
const nodeId = urlParams.get("nodeId") || urlParams.get("id");
const lang = urlParams.get("lang") || "java";
const type = urlParams.get("type");

currentNodeId = nodeId;
currentLang = lang;
currentType = type;

console.log("Loading quiz for nodeId:", nodeId, "lang:", lang, "type:", type);

// Hide page until auth loads
document.body.style.visibility = "hidden";

// ─────────────────────────────────────────────────────────────────────────────
// Save progress to Firebase after quiz completion - ONLY ON PERFECT SCORE
// ─────────────────────────────────────────────────────────────────────────────
async function saveProgress(score, totalQuestions) {
  if (!currentUserId || !currentLang || !currentNodeId) {
    console.log("Cannot save progress - missing user/lang/node");
    return false;
  }
  
  // ✅ Only save if score is perfect (100%)
  const isPerfectScore = (score === totalQuestions);
  
  if (!isPerfectScore) {
    console.log(`Quiz score: ${score}/${totalQuestions} - Need 100% to unlock next level`);
    return false;
  }
  
  try {
    const userRef = doc(db, "users", currentUserId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const userData = userSnap.data();
      const currentProgress = userData.progress || { html: [], python: [], java: [] };
      const langProgress = currentProgress[currentLang] || [];
      
      // Only add if not already completed
      if (!langProgress.includes(currentNodeId)) {
        const updatedProgress = {
          ...currentProgress,
          [currentLang]: [...langProgress, currentNodeId]
        };
        
        // Update XP (60 for coins, 150 for chests)
        const xpGain = currentType === 'chest' ? 150 : 60;
        const newXP = (userData.xp || 0) + xpGain;
        
        await updateDoc(userRef, {
          progress: updatedProgress,
          xp: newXP
        });
        
        console.log(`✅ PERFECT SCORE! Saved progress! Added ${currentNodeId} to ${currentLang}, +${xpGain} XP`);
        return true;
      } else {
        console.log(`Node ${currentNodeId} already completed`);
        return true; // Already completed
      }
    }
    return false;
  } catch (error) {
    console.error("Error saving progress:", error);
    return false;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Wait for auth, then load and start the quiz
// ─────────────────────────────────────────────────────────────────────────────
onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "index.html";
    return;
  }
  
  currentUserId = user.uid;
  console.log("User authenticated:", user.uid);
  
  // Now load the quiz questions
  const mapping = getMapping(nodeId);

  if (!mapping) {
    document.body.innerHTML = `<div style="color:red;font-family:monospace;padding:2rem;text-align:center">
      <h2>❌ Error: Unknown node</h2>
      <p>Node ID: "${nodeId}" not found in question mapping.</p>
      <button onclick="window.location.href='home.html'" style="margin-top:20px;padding:10px;background:#333;color:white;border:none;cursor:pointer">← Back to Map</button>
    </div>`;
    document.body.style.visibility = "visible";
    return;
  }

  // Dynamically import the right question file
  let allQuestions = [];
  try {
    const module = await import(mapping.file);
    allQuestions = module.questions;
    console.log(`Loaded ${allQuestions.length} questions from ${mapping.file}`);
  } catch (error) {
    console.error(`Failed to load ${mapping.file}:`, error);
    document.body.innerHTML = `<div style="color:red;font-family:monospace;padding:2rem;text-align:center">
      <h2>❌ Error: Could not load questions</h2>
      <p>Failed to load: ${mapping.file}</p>
      <button onclick="window.location.href='home.html'" style="margin-top:20px;padding:10px;background:#333;color:white;border:none;cursor:pointer">← Back to Map</button>
    </div>`;
    document.body.style.visibility = "visible";
    return;
  }

  const questions = allQuestions.filter(q => q.topic === mapping.topic);

  if (questions.length === 0) {
    document.body.innerHTML = `<div style="color:orange;font-family:monospace;padding:2rem;text-align:center">
      <h2>⚠️ No questions found</h2>
      <p>Topic: "${mapping.topic}" in ${mapping.file}</p>
      <p>Available topics: ${[...new Set(allQuestions.map(q => q.topic))].join(', ')}</p>
      <button onclick="window.location.href='home.html'" style="margin-top:20px;padding:10px;background:#333;color:white;border:none;cursor:pointer">← Back to Map</button>
    </div>`;
    document.body.style.visibility = "visible";
    return;
  }

  // Take first 3 questions for this node
  const selectedQuestions = questions.slice(0, 3);
  console.log(`Selected ${selectedQuestions.length} questions for node "${nodeId}"`);

  // Show the page now that everything is loaded
  document.body.style.visibility = "visible";
  
  // ─────────────────────────────────────────────────────────────────────────
  // Start the Quiz
  // ─────────────────────────────────────────────────────────────────────────
  let current = 0;
  let score = 0;
  let hp = 75;
  let selected = null;
  let answered = false;
  let quizCompleted = false;

  const petFace     = document.getElementById("pet-face");
  const hpBar       = document.getElementById("hp-bar");
  const hpLabel     = document.getElementById("hp-label");
  const qCounter    = document.getElementById("q-counter");
  const scoreDisp   = document.getElementById("score-display");
  const typeBadge   = document.getElementById("type-badge");
  const questionText= document.getElementById("question-text");
  const resultFlash = document.getElementById("result-flash");
  const choicesDiv  = document.getElementById("choices");
  const fillSection = document.getElementById("fill-section");
  const fillInput   = document.getElementById("fill-input");
  const submitBtn   = document.getElementById("submit-btn");

  function loadQuestion() {
    const q = selectedQuestions[current];
    answered = false;
    selected = null;

    resultFlash.className = "result-flash";
    if (fillInput) fillInput.value = "";
    if (fillInput) fillInput.style.borderColor = "";
    if (fillInput) fillInput.style.color = "";

    qCounter.textContent = `Q ${current + 1} / ${selectedQuestions.length}`;
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
      choicesDiv.classList.remove("hidden");
      choicesDiv.className = `choices-grid ${q.type === "mc" ? "mc-grid" : "tf-grid"}`;

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

  submitBtn.addEventListener("click", async () => {
    if (answered || quizCompleted) return;
    const q = selectedQuestions[current];
    let correct = false;

    if (q.type === "mc" || q.type === "tf") {
      if (selected === null) {
        resultFlash.textContent = "⚠️ Select an answer!";
        resultFlash.className = "result-flash wrong show";
        setTimeout(() => {
          resultFlash.className = "result-flash";
        }, 1000);
        return;
      }
      correct = selected === q.correct;

      document.querySelectorAll(".choice-btn").forEach((btn, i) => {
        btn.classList.remove("selected");
        if (i === q.correct) btn.classList.add("correct");
        else if (i === selected && !correct) btn.classList.add("wrong");
      });
    } else {
      const userVal = fillInput.value.trim().toLowerCase();
      correct = userVal === q.answer.toLowerCase();
      fillInput.style.borderColor = correct ? "#00ff88" : "#ff4444";
      fillInput.style.color = correct ? "#00ff88" : "#ff4444";
    }

    answered = true;
    if (correct) score++;
    scoreDisp.textContent = `Score: ${score}`;

    resultFlash.textContent = correct ? "✓ Correct!" : "✗ Wrong!";
    resultFlash.className = `result-flash ${correct ? "correct" : "wrong"} show`;

    updatePet(correct);

    setTimeout(async () => {
      current++;
      if (current < selectedQuestions.length) {
        loadQuestion();
      } else {
        // Quiz complete
        quizCompleted = true;
        
        // Save progress to Firebase ONLY if perfect score
        const wasSaved = await saveProgress(score, selectedQuestions.length);
        
        if (score === selectedQuestions.length) {
          // PERFECT SCORE - Level unlocked!
          if (wasSaved) {
            resultFlash.textContent = `🎉 PERFECT! +${currentType === 'chest' ? 150 : 60} XP! 🎉`;
            resultFlash.className = "result-flash correct show";
            
            // Find and load the next level
            const nextNodeId = getNextNodeId(currentNodeId, currentLang);
            
            if (nextNodeId) {
              // Add "Next Level" button
              const nextBtn = document.createElement("button");
              nextBtn.textContent = "➡ NEXT LEVEL ➡";
              nextBtn.id = "next-level-btn";
              nextBtn.style.marginTop = "20px";
              nextBtn.style.marginRight = "10px";
              nextBtn.style.width = "48%";
              nextBtn.style.padding = "12px";
              nextBtn.style.background = "#00ff88";
              nextBtn.style.border = "3px solid #00ffcc";
              nextBtn.style.color = "#1a1a2e";
              nextBtn.style.fontFamily = "'Press Start 2P', monospace";
              nextBtn.style.fontSize = "9px";
              nextBtn.style.cursor = "pointer";
              nextBtn.style.fontWeight = "bold";
              nextBtn.onclick = () => {
                // Get the same type (coin/chest) for next level
                window.location.href = `quiz.html?nodeId=${nextNodeId}&lang=${currentLang}&type=${currentType}`;
              };
              document.querySelector(".game-container").appendChild(nextBtn);
              
              submitBtn.textContent = "LEVEL COMPLETE! ✓";
            } else {
              submitBtn.textContent = "🏆 ALL LEVELS COMPLETE! 🏆";
            }
          } else {
            resultFlash.textContent = `🎉 Perfect Score! Level already completed! 🎉`;
            resultFlash.className = "result-flash correct show";
            submitBtn.textContent = "LEVEL COMPLETE! ✓";
          }
        } else {
          resultFlash.textContent = `📚 Score: ${score}/${selectedQuestions.length} - Need 100% to unlock next level! 📚`;
          resultFlash.className = "result-flash wrong show";
          submitBtn.textContent = "TRY AGAIN";
        }
        
        submitBtn.disabled = true;
        
        // If not perfect score, show retry button
        if (score !== selectedQuestions.length) {
          const retryBtn = document.createElement("button");
          retryBtn.textContent = "⟳ TRY AGAIN";
          retryBtn.id = "retry-btn";
          retryBtn.style.marginTop = "20px";
          retryBtn.style.marginRight = "10px";
          retryBtn.style.width = "48%";
          retryBtn.style.padding = "12px";
          retryBtn.style.background = "#ff4444";
          retryBtn.style.border = "3px solid #ff8888";
          retryBtn.style.color = "white";
          retryBtn.style.fontFamily = "'Press Start 2P', monospace";
          retryBtn.style.fontSize = "9px";
          retryBtn.style.cursor = "pointer";
          retryBtn.onclick = () => {
            // Reset quiz
            current = 0;
            score = 0;
            hp = 75;
            selected = null;
            answered = false;
            quizCompleted = false;
            submitBtn.disabled = false;
            submitBtn.textContent = "Submit";
            scoreDisp.textContent = `Score: 0`;
            hpBar.style.width = "75%";
            hpLabel.textContent = `HP: 75 / 100`;
            retryBtn.remove();
            const existingNextBtn = document.querySelector("#next-level-btn");
            if (existingNextBtn) existingNextBtn.remove();
            const existingBackBtn = document.querySelector(".back-btn");
            if (existingBackBtn) existingBackBtn.remove();
            loadQuestion();
          };
          document.querySelector(".game-container").appendChild(retryBtn);
        }
        
        // Add Back to Map button
        const backBtn = document.createElement("button");
        backBtn.textContent = "◀ BACK TO MAP";
        backBtn.className = "back-btn";
        backBtn.style.marginTop = "20px";
        // Adjust width based on whether next button exists
        const hasNextBtn = document.querySelector("#next-level-btn");
        backBtn.style.width = hasNextBtn ? "48%" : "100%";
        backBtn.style.padding = "12px";
        backBtn.style.background = "#1a1a2e";
        backBtn.style.border = "3px solid #7c4dff";
        backBtn.style.color = "#caa6ff";
        backBtn.style.fontFamily = "'Press Start 2P', monospace";
        backBtn.style.fontSize = "9px";
        backBtn.style.cursor = "pointer";
        backBtn.onclick = () => { 
          window.location.href = `home.html?lang=${currentLang}`;
        };
        document.querySelector(".game-container").appendChild(backBtn);
      }
    }, 1300);
  });

  // Start the quiz
  loadQuestion();
});