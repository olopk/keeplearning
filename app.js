/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var players, RoundScore, total, active, gameActive, previousDice;
players = [0, 1];

function init() {
total = [0, 0];
RoundScore = 0;
active = 0;
document.getElementById('score-0').innerHTML = 0;
document.getElementById('score-1').innerHTML = 0;
gameActive = true;
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.getElementById('name-0').innerHTML = 'Player 1';
document.getElementById('name-1').innerHTML = 'Player 2';
}
init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gameActive){
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');   
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        if (dice !== 1) {
            console.log(dice);
            if (dice === previousDice){
                document.getElementById('name-' + active).innerHTML = 'You loose! double' + dice;
                document.querySelector('.player-' + active + '-panel').classList.add('winner');
                document.querySelector('.player-0-panel').classList.remove('active');
                document.querySelector('.player-1-panel').classList.remove('active');
                document.querySelector('.dice').style.display = 'none';
                gameActive = false;
            }
            else{
                previousDice = dice; 
                RoundScore += dice;
                document.getElementById('current-' + active).innerHTML = RoundScore;
                    }
        }
        else{
            RoundScore = 0;
            document.getElementById('current-' + active).innerHTML = RoundScore;
            active === 0 ? active = 1 : active = 0;
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
        }
}
    })

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gameActive){
        total[active] += RoundScore;
        document.getElementById('score-' + active).innerHTML = total[active];
        if (total[active] >= 20) {
            document.getElementById('name-' + active).innerHTML = 'Winner!';
            document.querySelector('.player-' + active + '-panel').classList.add('winner');
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'none';
            gameActive = false;
        }
        else {
        RoundScore = 0;
        active === 0 ? active = 1 : active = 0;
            }
        }
})    
document.querySelector('.btn-new').addEventListener('click', function () {
    init();
})