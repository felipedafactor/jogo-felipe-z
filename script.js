let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
    let guess = document.getElementById("guess").value;
    let result = document.getElementById("result");
    let attemptsLeft = document.getElementById("attempts");

    if (guess == "") {
        result.innerHTML = "Por favor, insira um número.";
        return;
    }

    guess = parseInt(guess);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.innerHTML = "O número deve estar entre 1 e 100.";
        return;
    }

    attempts--;

    if (guess === secretNumber) {
        result.innerHTML = "Parabéns! Você adivinhou o número!";
        document.querySelector("button").disabled = true;
    } else if (guess < secretNumber) {
        result.innerHTML = "Tente um número maior!";
    } else {
        result.innerHTML = "Tente um número menor!";
    }

    attemptsLeft.textContent = attempts;

    if (attempts === 0) {
        result.innerHTML = "Você perdeu! O número secreto era " + secretNumber;
        document.querySelector("button").disabled = true;
    }
}
