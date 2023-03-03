const game=()=>{
    let pScore = 0;
    let cScore = 0;

    const startGame=()=>{
        const playbtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');
        playbtn.addEventListener('click',()=>{
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
        })
    }

    const playMatch=()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        const computerOptions = ['rock','paper','scissors'];

        options.forEach((option)=>{
            option.addEventListener('click',function(){
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];
                compareHands(this.textContent,computerChoice);
                
                playerHand.src = `./img/${this.textContent}.png`;
                computerHand.src = `./img/${computerChoice}.png`;
            })
        })
    }

    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const updateStatus = ()=>{
        if(pScore===10 || cScore===10){
            const resultScreen = document.querySelector('.result');
            const resultStatus = document.querySelector('.result h2');
            const matchScreen = document.querySelector('.match');
            resultScreen.classList.add('fadeIn');
            matchScreen.classList.remove('fadeIn');
            matchScreen.classList.add('fadeOut');

            if(pScore===10 && cScore===10){
                resultStatus.textContent = "It is a tie";
            }
            if(pScore===10){
                resultStatus.textContent = "Player Wins"
            }
            if(cScore===10){
                resultStatus.textContent = "Computer Wins"
            }
            
            const restartBtn = document.querySelector('.result button');
            restartBtn.addEventListener('click',()=>{
                resultScreen.classList.remove('fadeIn');
                matchScreen.classList.remove('fadeOut');
                matchScreen.classList.add('fadeIn');
                pScore=0;
                cScore=0;
                updateScore();
            })
        }
    }
    const compareHands = (playerChoice,computerChoice)=>{
        const winner = document.querySelector('.winner');
        if(playerChoice===computerChoice){
            winner.textContent = "It is a tie";
            return;
        }
        if(playerChoice==='rock'){
            if(computerChoice==='paper'){
                winner.textContent = "Computer wins";
                cScore++;
            }
            else{
                winner.textContent = "Player wins";
                pScore++;
            }
            updateScore();
            updateStatus();
            return;
        }
        if(playerChoice==='paper'){
            if(computerChoice==='scissors'){
                winner.textContent = "Computer wins";
                cScore++;
            }
            else{
                winner.textContent = "Player wins";
                pScore++;
            }
            updateScore();
            updateStatus();
            return;
        }
        if(playerChoice==='scissors'){
            if(computerChoice==='rock'){
                winner.textContent = "Computer wins";
                cScore++;
            }
            else{
                winner.textContent = "Player wins";
                pScore++;
            }
            updateScore();
            updateStatus();
            return;
        }
    }
    startGame();
    playMatch();
}
game();