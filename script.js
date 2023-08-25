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

var selectedNumber = 0;
var tileSelected = 0;
var x = 0;
var correct = document.getElementByClassName("tiles");


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
    // creating number select
    for (var r = 1; r < 10; r++) { //Choices
        var numbers = document.createElement ('div');
        numbers.id = r;
        numbers.innerText = r;
        numbers.addEventListener("click", selectNumber);
        numbers.classList.add("numbers");
        document.getElementById('choices').appendChild(numbers);
        }
    }
    
    function selectNumber(){
        if (selectedNumber != 0) {
            selectedNumber.style.backgroundColor = "white";
        }
        selectedNumber = this;
        selectedNumber.style.backgroundColor = "lightblue";
    }
    
    function selectTile(){
        if (selectedNumber) {
            if (this.innerText != ""){
                return;
            }
            var coords = this.id.split("-");
            var i = parseInt(coords[0]);
            var j = parseInt(coords[1]);
    
            if (solution [i][j] == selectedNumber.id){
                this.innerText = selectedNumber.id;
                this.classList.remove("incorrect-number");
                this.style.backgroundColor = "whitesmoke";
                document.getElementById("feedback").innerHTML = "";
            } else {
                this.style.backgroundColor = "lightcoral";
                document.getElementById("feedback").innerHTML = "Number already exists";
            }
        }
    }
    function removeGrid() {
        window.location.reload();
    }












// Extra Code or old code to be used later possible
    /*


 for (var i = 0; i < 9; i++) {
        var row = document.createElement ('div');
        row.className = "row";
        for (var j = 0; j < 9; j++){
            var box = document.createElement ('div');
            //box.maxLength = 1;
            box.id = i.toString() + "-" + j.toString();
            if (solution[j][i] != "-"){
                box.innerText = solution[j][i];
            }
            box.classList.add ("box");
            row.appendChild(box);
        }
        document.getElementById('board').appendChild(row);
    }
    /*function makeGrid1 () { //board for 3x3 
    document.getElementById("1").disabled = true
    document.getElementById("3").disabled = true;
    document.getElementById("notes").innerHTML = "Rules: Every number can only be inputted once";
    document.getElementById("extra").innerHTML = "Rows and Column must added up to the same number";
    for (var i = 0; i < 3; i ++ ) {
        for (var j = 0; j < 3; j++) {
            var tiles = document.createElement ('div');
            tiles.id = i + "-" + j;
            tiles.style.height = "150px";
            tiles.style.width = "150px";
            if (puzzle3 [i][j] != "-") {
                tiles.innerText = puzzle3 [i][j];
            }
        }
        tiles.classList.add("tiles");
        document.getElementById('board').append(tiles);
    } 
    for (var r = 1; r < 10; r++) { //Choices
        var numbers = document.createElement ('div');
        numbers.id = r;
        numbers.innerText = r;
        numbers.classList.add("numbers");
        document.getElementById('choices').appendChild(numbers);
        }
} */

