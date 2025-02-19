document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const result = document.getElementById('result');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            playGame(button.id);
        });
    });

    function playGame(playerChoice) {
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        let message = `Computer chose ${computerChoice}. `;

        if (playerChoice === computerChoice) {
            message += 'It\'s a tie!';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            message += 'You win!';
        } else {
            message += 'You lose!';
        }

        result.textContent = message;
    }
});
