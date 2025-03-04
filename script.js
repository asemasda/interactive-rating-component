const subBtn = document.getElementById("submit-btn");
const ratNum = document.querySelector(".container");
const thankYou = document.getElementById("thankyou");
const numbtns = document.querySelectorAll(".rating-btn");

let nums = document.querySelector(".numes");

let defaultScore = 0;

numbtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        numbtns.forEach((btn) => btn.classList.remove("active"));

        e.target.classList.add("active");

        defaultScore = e.target.textContent;
    });
});

subBtn.addEventListener("click", (e) => {
    e.preventDefault();
    ratNum.style.display = "none";
    thankYou.style.display = "block";

    nums.textContent = defaultScore;
});
