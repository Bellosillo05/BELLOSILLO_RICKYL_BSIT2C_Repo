// declaring variable
var randomLoc = Math.floor (Math.random( ) * 5);

var location1 =  randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guess = 0;

var isSunk = false;

//Game Logic

while (isSunk == false){
    guess = prompt ("Ready!, Aim!, Fire!(enter number 0-6)");
    
    if (guess == null ) {
    alert ( "your fantastic!");
    } else {
        guesses = + 1;

        if  (guess == location1 || guess ==  location2 || guess == location3) {
            hits = hits + 1;
            alert("Hit!")

            if (hits ==3){
                isSunk = true;
                alert ("You Sank my Battleship!⛴️😒")
            }

        }
        
        else{
            alert("Miss!")
        }
    }
}

var accuracy = (guesses > 0 ? (hits / guesses) * 100: 0 ).toFixed(2);

var stats = " you sank my battleship at: "  + guesses + " guesses" + "and your accuracy is: " + (3/guesses);
alert(stats);