
// DARK MODE
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeBtn.textContent = isDark
        ? "☀️ Light mode"
        : "🌙 Dark mode";

    themeBtn.setAttribute(
        "aria-label",
        isDark ? "Light mode руу шилжих" : "Dark mode руу шилжих"
    );
});

// 3D FLIP CARD
const flipCard = document.getElementById("flipCard");
const flipBtn = document.getElementById("flipBtn");

flipBtn.addEventListener("click", () => {
    flipCard.classList.toggle("flipped");

    const isFlipped = flipCard.classList.contains("flipped");

    flipBtn.textContent = isFlipped
        ? "Буцаах"
        : "Flip card";
});
