//9 arrays
var solution = [ //9x9 
    "759462813",
    "463518297",
    "128973645",
    "697184532",
    "584236971",
    "231795486",
    "345821769",
    "912647358",
    "876359124" 
]

var puzzle = [
    "7--4-2-1-",
    "4---1--9-",
    "---9----5",
    "----8----",
    "-8--36---",
    "2-1----8-",
    "----21---",
    "9---47---",
    "8--3--1--"
] 

var playerChoice = 0;
var x = 0;



function makeGrid () { //board for 9x9
    document.getElementById("make").disabled = true;
    document.getElementById("restart").style.visibility = "visible";
    document.getElementById("notes").innerHTML = "Rules: No repeating numbers in the same grid, column and row";
    document.getElementById("extra").innerHTML = "Rows and Column must added up to the same number"
    // Creating grid and generating puzzle
    for (var i = 0; i < 9; i ++) {  
        for (var j = 0; j < 9; j++) {
            var tiles = document.createElement ('div');
            tiles.id = i + "-" + j;
            if (puzzle [i][j] != "-") {
                tiles.innerText = puzzle [i][j];
                tiles.style.backgroundColor = "whitesmoke";
            }
            if (i == 2 || i == 5) {
             tiles.style.borderBottomColor = "black";
             tiles.style.borderBottomWidth = "2px";
            }
            if (j == 2 || j == 5) {
                tiles.style.borderRightColor = "black";
                tiles.style.borderRightWidth = "2px";
               }
        tiles.addEventListener("click", selectTile);
        tiles.classList.add("tiles");
        document.getElementById('board').append(tiles);
        }
    }
    // Number Selection
    for (var r = 1; r < 10; r++) {
        var numbers = document.createElement ('div');
        numbers.id = r;
        numbers.innerText = r;
        numbers.addEventListener("click", selectNumber);
        numbers.classList.add("numbers");
        document.getElementById('choices').appendChild(numbers);
        }
    }
    
    // When Selecting a Number 
    function selectNumber(){
        if (playerChoice != 0) {
            playerChoice.style.backgroundColor = "white";
        }
        playerChoice = this;
        playerChoice.style.backgroundColor = "lightblue";
    }
    
    // When selecting a tile
    function selectTile(){
            if (this.innerText == ""){
                var boxid = this.id.split("-"); // example 8-2 -> 8 2 
                var i = boxid[0]; // example i = 8 
                var j = boxid[1]; // example j = 2
    
                if (solution [i][j] == playerChoice.id){
                    this.innerText = playerChoice.id;
                    this.style.backgroundColor = "whitesmoke";
                    document.getElementById("feedback").style.color = "white";
                    document.getElementById("feedback").innerHTML = "PlaceHolder";
                } else {
                    this.style.backgroundColor = "lightcoral";
                    document.getElementById("feedback").style.color = "red";
                    document.getElementById("feedback").innerHTML = "Number already exists";
                }
            }
        }
function removeGrid() {
    window.location.reload();
}