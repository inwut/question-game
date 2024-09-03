const questions = [
    "Назви найкращу якість цієї людини на твою думку.",
    "Назви найгіршу якість цієї людини на твою думку.",
    "Розкажи своє перше враження про цю людину.",
    "Розкажи про найвеселіший спогад повʼязаний з цією людиною.",
    "Що ця людина приносить в колектив, що не можуть дати інші члени компанії?",
    "Яка найгірша звичка цієї людини на твою думку.",
    "З ким з ваших спільних знайомих ця людина ніколи не знайде спільну мову на твою думку?",
    "Яка особливість в зовнішності цієї людини тобі подобається найбільше?",
    "Яка професія (окрім тієї на яку вчиться ця людина) їй би підійшла на твою думку?",
    "Від якого факультету з Могилянки (окрім того на якому ця людина вчиться) найбільший вайб цієї людини?",
    "Якби ти ніколи не спілкувався(-лась) до цього, що би ти подумав(-ла) про цю людину, спираючись лише на її зовнішність?",
    "Якби ця людина впала в кому і коли прокинулась не пам’ятала б тебе, який сумісний спогад ти б їй розказав(-ла) в першу чергу?"
]

const numberInput = document.querySelector("#number-input");
const playButton = document.querySelector(".main-container i");

if(playButton) playButton.setAttribute("disabled", !numberInput.value);

if (playButton) playButton.addEventListener("click", () => {
    if(numberInput.value) {
        localStorage.setItem('numberOfPlayers', numberInput.value);
        window.location.href = "game.html";
    }
});

const player = document.querySelector("#player");
const question = document.querySelector("#question");

if(player) {
    player.textContent = Math.floor(Math.random() * localStorage.getItem('numberOfPlayers')) + 1;
    player.addEventListener("click", () => player.textContent = Math.floor(Math.random() * localStorage.getItem('numberOfPlayers')) + 1);
}

if(question) {
    question.textContent= questions[Math.floor(Math.random() * questions.length)];
    question.addEventListener("click", () => question.textContent= questions[Math.floor(Math.random() * questions.length)]);
}

const reloadButton = document.querySelector(".game-container button");
if(reloadButton) reloadButton.addEventListener("click", () => location.reload());