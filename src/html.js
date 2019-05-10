import getSentence from "./motivational_sentence.js";

async function displayConfetti() {
  const module = await import("./confetti.js");
  module.throwConfetti();
}

async function listenForKonamiCode() {
  const module = await import("./konami.js");
  module.konami(activateYoshiMode);
}

function isAprilFirst() {
  const now = new Date();
  return now.getMonth() === 3 && now.getDate() === 1;
}

function activateYoshiMode() {
  document.getElementById("sentence-icon").classList.add("konami");
  window.konamiActivated = true;
}

document.addEventListener("DOMContentLoaded", async () => {
  if (isAprilFirst()) {
    activateYoshiMode();
  }

  const { motivationalSentenceTop, motivationalSentenceBottom } = getSentence();

  document.getElementById("sentence-top").textContent = motivationalSentenceTop;
  document.getElementById(
    "sentence-bottom"
  ).textContent = motivationalSentenceBottom;

  document.title = motivationalSentenceTop + motivationalSentenceBottom;

  await displayConfetti();
  await listenForKonamiCode();
});
