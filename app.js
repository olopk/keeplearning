/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var players, current, total, score0, score1, active;
players = [0, 1];
total = [0, 0];
current = [0, 0];
score0 = document.getElementById('current-0');
score1 = document.getElementById('current-1');
active = 0;
    
document.querySelector('.btn-roll').addEventListener('click', function () {
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');    
    
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    var pobierz = 'score' + active;
    
    if (dice !== 1){        
        current[active] += dice;
        pobierz.innerHTML = current[active];
    }
    else{ 
        pobierz.innerHTML = 0; 
        current[active] = 0;
    }
    
    
    
});