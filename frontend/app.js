import { questions } from "./questions.js";

document.addEventListener("DOMContentLoaded", () => {
  let current = 0;
  let score = 0;
  let hp = 75;
  let selected = null;
  let answered = false;

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
    const q = questions[current];
    answered = false;
    selected = null;
    resultFlash.className = "result-flash";
    fillInput.value = "";

    qCounter.textContent = `Q ${current + 1} / ${questions.length}`;
    questionText.textContent = q.question;

    // Type badge
    if (q.type === "mc")   { typeBadge.textContent = "Multiple Choice"; typeBadge.className = "type-badge mc"; }
    if (q.type === "tf")   { typeBadge.textContent = "True or False";   typeBadge.className = "type-badge tf"; }
    if (q.type === "fill") { typeBadge.textContent = "Fill in the Blank"; typeBadge.className = "type-badge fill"; }

    // Reset choices/fill
    choicesDiv.innerHTML = "";
    choicesDiv.classList.add("hidden");
    fillSection.classList.add("hidden");

    if (q.type === "mc" || q.type === "tf") {
      choicesDiv.className = `choices-grid ${q.type === "mc" ? "mc-grid" : "tf-grid"}`;
      q.choices.forEach((choice, i) => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.textContent = choice;
        btn.onclick = () => {
          if (answered) return;
          selected = i;
          document.querySelectorAll(".choice-btn").forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
        };
        choicesDiv.appendChild(btn);
      });
    } else {
      fillSection.classList.remove("hidden");
      fillInput.focus();
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
    setTimeout(() => { petFace.textContent = "🐣"; }, 800);
  }

  submitBtn.addEventListener("click", () => {
    if (answered) return;
    const q = questions[current];
    let correct = false;

    if (q.type === "mc" || q.type === "tf") {
      if (selected === null) return;
      correct = selected === q.correct;
      document.querySelectorAll(".choice-btn").forEach((btn, i) => {
        if (i === q.correct) btn.classList.add("correct");
        else if (i === selected && !correct) btn.classList.add("wrong");
        btn.classList.remove("selected");
      });
    } else {
      correct = fillInput.value.trim().toLowerCase() === q.answer.toLowerCase();
      fillInput.style.borderColor = correct ? "#00ff88" : "#ff4444";
      fillInput.style.color       = correct ? "#00ff88" : "#ff4444";
    }

    answered = true;
    if (correct) score++;
    scoreDisp.textContent = `Score: ${score}`;

    resultFlash.textContent = correct ? "✓ Correct!" : "✗ Wrong!";
    resultFlash.className = `result-flash ${correct ? "correct" : "wrong"} show`;

    updatePet(correct);

    setTimeout(() => {
      if (q.type === "fill") { fillInput.style.borderColor = ""; fillInput.style.color = ""; }
      current = (current + 1) % questions.length;
      loadQuestion();
    }, 1200);
  });

  loadQuestion();
});