const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const mainPage = document.getElementById("mainPage");
const successPage = document.getElementById("successPage");

// YES → show celebration page
yesBtn.addEventListener("click", () => {
  mainPage.style.display = "none";
  successPage.style.display = "block";
});

// NO → runaway button
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;

  noBtn.style.position = "relative";
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
