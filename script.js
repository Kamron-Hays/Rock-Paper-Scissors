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
    
    function addWeapons()
    {
        for (var i = 0; i < weapons.length; i++)
        {
            let buttonElement = '<button type="button" name="' + weapons[i] + '">' + weapons[i] + '</button>';
            $("#weapons").append(buttonElement);
        }
    }
});