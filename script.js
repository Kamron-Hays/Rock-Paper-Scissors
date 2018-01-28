const weapons = [ 'Rock', 'Paper', 'Scissors', 'Lizard', 'Spock' ];

const rules = [
  [ 'Scissors', 'cuts', 'Paper' ],
  [ 'Paper', 'covers', 'Rock' ],
  [ 'Rock', 'crushes', 'Lizard' ],
  [ 'Lizard', 'poisons', 'Spock' ],
  [ 'Spock', 'smashes', 'Scissors' ],
  [ 'Scissors', 'decapitates', 'Lizard' ],
  [ 'Lizard', 'eats', 'Paper' ],
  [ 'Paper', 'disproves', 'Spock' ],
  [ 'Spock', 'vaporizes', 'Rock' ],
  [ 'Rock', 'crushes', 'Scissors' ]
];

$(document).ready(function()
{
    let playerScore = 0;
    let computerScore = 0;
    let gameInProgress = true;

    $('#title').text( getGameName() );
    addWeapons();
    $('#status').text("Select a weapon.");
    setScore(playerScore, computerScore);

    function computerPlay()
    {
        return weapons[Math.floor(Math.random() * weapons.length)];
    }
    
    function playRound(playerSelection, computerSelection)
    {
        let result = "";
        
        for (var i = 0; i < rules.length; i++)
        {
            if ( playerSelection === computerSelection )
            {
                result = "It's a tie! Select another weapon.";
            }
            else if ( ( playerSelection === rules[i][0] ||
                        computerSelection === rules[i][0] ) &&
                      ( playerSelection === rules[i][2] ||
                        computerSelection === rules[i][2] ) )
            {
                if ( playerSelection === rules[i][0] )
                {
                    result = "You win this round!";
                    playerScore += 1;
                }
                else
                {
                    result = "You lose this round!";
                    computerScore += 1;
                }
                
                result += " " + rules[i][0] + " " + rules[i][1] + " " + rules[i][2];
            }
        }

        $('#player-selection').text("Your selection: " + playerSelection);
        $('#computer-selection').text("Computer selection: " + computerSelection);
        $('#status').text(result);
        setScore(playerScore, computerScore);
        
        if ( playerScore >= 5 || computerScore >= 5 )
        {
            gameInProgress = false;
            let gameOver = "<h1 id='game-over'>Game Over. You ";
            gameOver += ( playerScore >= 5 ) ? "won" : "lost";
            gameOver += "!</h1>";
            $('#score').append(gameOver);
            $('#score').append("<button type='button' id='restart'>Play Again</button>");
        }

        return result;
    }

    function getGameName()
    {
        let string = "";

        for (var i = 0; i < weapons.length; i++)
        {
            string += weapons[i];
            if ( i+1 < weapons.length )
            {
                string += ", ";
            }
        }

        return string;
    }

    function getRules()
    {
        let rulesString = "";

        for (var i = 0; i < rules.length; i++)
        {
            let rule = rules[i][0] + " " + rules[i][1] + " " + rules[i][2] + "\n";
            rulesString += rule;
        }
        
        rulesString += "\nFirst player to reach 5 points wins the game!";

        return rulesString;
    }

    function addWeapons()
    {
        for (var i = 0; i < weapons.length; i++)
        {
            let buttonElement = '<button type="button" class="weapon" name="' + weapons[i] + '">' + weapons[i] + '</button>';
            $("#weapons").append(buttonElement);
        }
    }

    function setScore(playerScore, computerScore)
    {
        $('#player-score').text("Your Score: " + playerScore);
        $('#computer-score').text("Computer Score: " + computerScore);
    }

    $('#rules').on('click', function()
    {
        alert( getRules() );
    });

    $('.weapon').on('click', function()
    {
        if ( gameInProgress )
        {
            playRound(this.name, computerPlay());
        }
    });
    
    $('#score').on('click', '#restart', function()
    {
        $('#game-over').remove();
        $('#restart').remove();
        playerScore = 0;
        computerScore = 0;
        $('#status').text("Select a weapon.");
        setScore(playerScore, computerScore);
        $('#player-selection').text("Your selection:");
        $('#computer-selection').text("Computer selection:");
        gameInProgress = true;
    });
});
