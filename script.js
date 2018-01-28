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
    $('#title').text( getGameName() );
    addWeapons();
    $('#status').text("Select a weapon.");

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
                result = ( playerSelection === rules[i][0] ) ? "You win!" : "You lose!";
                
                result += " " + rules[i][0] + " " + rules[i][1] + " " + rules[i][2];
            }
        }

        $('#player-selection').text("Player selection: " + playerSelection);
        $('#computer-selection').text("Computer selection: " + computerSelection);
        $('#status').text(result);

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

    $('#rules').on('click', function()
    {
        alert( getRules() );
    });
    
    $('.weapon').on('click', function()
    {
        playRound(this.name, computerPlay());
    });
});
