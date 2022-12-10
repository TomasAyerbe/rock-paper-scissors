var cpu = [1, 2, 3];
var playerChoose = 0;
var cpuChoose = 0;
var winner = 0;
var roundNumber = 1;
var wins = 0;

function getRandom(list) {
    return list[Math.floor((Math.random()*list.length))];
}

function fadeInRock(isPlayer) {
    if (isPlayer) {
        $('#player-rock').fadeIn(300);
    } else {
        $('#cpu-rock').fadeIn(300);
    }  
}

function fadeInPaper(isPlayer) {
    if (isPlayer) {
        $('#player-paper').fadeIn(300);
    } else {
        $('#cpu-paper').fadeIn(300);
    } 
}

function fadeInScissors(isPlayer) {
    if (isPlayer) {
        $('#player-scissors').fadeIn(300);
    } else {
        $('#cpu-scissors').fadeIn(300);
    } 
}

function fadeOutRock(isPlayer) {
    if (isPlayer) {
        $('#player-rock').fadeOut(300);
    } else {
        $('#cpu-rock').fadeOut(300);
    } 
}

function fadeOutPaper(isPlayer) {
    if (isPlayer) {
        $('#player-paper').fadeOut(300);
    } else {
        $('#cpu-paper').fadeOut(300);
    } 
}

function fadeOutScissors(isPlayer) {
    if (isPlayer) {
        $('#player-scissors').fadeOut(300);
    } else {
        $('#cpu-scissors').fadeOut(300);
    } 
}

function chooseRock(isPlayer) {
    fadeInRock(isPlayer);

    fadeOutPaper(isPlayer);

    fadeOutScissors(isPlayer);
}

function choosePaper(isPlayer) {
    fadeInPaper(isPlayer);

    fadeOutRock(isPlayer);

    fadeOutScissors(isPlayer);
}

function chooseScissors(isPlayer) {
    fadeInScissors(isPlayer);

    fadeOutRock(isPlayer);

    fadeOutPaper(isPlayer);
}

function cpuMove(cpuChoose) {
    switch (cpuChoose) {
        case 1:
            chooseRock(false);
        break;
        case 2:
            choosePaper(false);
        break;
        case 3:
            chooseScissors(false);
        break;
    }            
}

function checkWinner(playerChoose, cpuChoose) {
    let winner;
    //winner 0 = draw
    //winner 1 = player
    //winner 2 = cpu 

    switch (playerChoose) {
        case 1:
            switch (cpuChoose) {
                case 1:
                    winner = 0;
                break;
                case 2:
                    winner = 2;
                break;
                case 3:
                    winner = 1;
                break;
            }
        break;
        case 2:
            switch (cpuChoose) {
                case 1:
                    winner = 1;
                break;
                case 2:
                    winner = 0;
                break;
                case 3:
                    winner = 2;
                break;
            }
        break;
        case 3:
            switch (cpuChoose) {
                case 1:
                    winner = 2;
                break;
                case 2:
                    winner = 1;
                break;
                case 3:
                    winner = 0;
                break;
            }
        break;
    }

    return winner;
}

function game() {
    $('.element-button').prop('disabled', true);
    
    cpuChoose = getRandom(cpu);

    cpuMove(cpuChoose);

    winner = checkWinner(playerChoose, cpuChoose);
        
    finishRound(winner);
}

function showWins() {
    $('#round-number, h3, .element').fadeOut(3500);
    
    $('#round-status').fadeOut(3500, function(){
        $(this).addClass('center-item');
    
        $(this).text("Wins: " + wins);
    
        $(this).fadeIn(1000);
        
        $('.element').hide();

        nextRound();
    });
}

function finishRound(winner) {
    $('#round-status').fadeOut(500, function() {
        $(this).fadeIn(500);

        switch (winner) {
            case 0:
                draw();
            break;
            case 1:
                win();
            break;
            case 2:
                lose();
            break;
        }
    });
}

function nextRound() {
    $('#round-number').text("Round " + roundNumber);

    $('#round-status').fadeOut(2000, function() {
        $(this).removeClass('center-item');
    
        $(this).text("VS");
        
        $('#round-number,h3').fadeIn(3500);

        reloadElements(3500);

        $(this).fadeIn(3500);

        $('.element-button').prop('disabled', false);
    });
}

function startGame() {
    $('#round-number').text("Round " + roundNumber);

    $('#player-rock').click(function(){
        playerChoose = 1;

        chooseRock(true);

        game();
    });

    $('#player-paper').click(function(){
        playerChoose = 2;

        choosePaper(true);

        game();
    });

    $('#player-scissors').click(function(){
        playerChoose = 3;

        chooseScissors(true);

        game();
    });
}

function draw() {
    $('#round-status').text("It's a draw!");

    showWins();
}

function win() {
    $('#round-status').text("You win!");

    ++wins;

    ++roundNumber;

    showWins();
}

function lose() {
    $('#round-status').text("You lose!");

    restartGame();

    $('#round-number, h3, .element, #round-status').fadeOut(3500);
    
    nextRound();
}

function restartGame() {
    roundNumber = 1;
    wins = 0;
}

function reloadElements(ms) {
    $('.element').fadeIn(ms);
}

$(window).on('load', function(){
    startGame();
});
