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


function makeGrid3 () { //board for 9x9
    document.getElementById("1").disabled = true;
    document.getElementById("notes").innerHTML = "Rules: Only numbers form 1-9 can be inputted";
    document.getElementById("extra").innerHTML = "Rows and Column must added up to the same number"
    // Creating grid and generating puzzle
    for (var i = 0; i < 9; i ++) {  
        for (var j = 0; j < 9; j++) {
            var tiles = document.createElement ('div');
            tiles.id = i + "-" + j;
            if (puzzle [i][j] != "-") {
                tiles.innerText = puzzle [i][j];
                tiles.classList.add("correct-number");
            }
            if (i == 2 || i == 5) {
             tiles.classList.add("horizontal-line");
            }
            if (j == 2 || j == 5) {
                tiles.classList.add("vertical-line");
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
            selectedNumber.classList.remove("numbers-selected");
        }
        selectedNumber = this;
        selectedNumber.classList.add("numbers-selected");
    }
    
    function selectTile(){
        if (selectedNumber) {
            if (this.innerText != ""){
                return;
            }
            this.innerText = selectedNumber.id;
            var coords = this.id.split("-");
            var i = parseInt(coords[0]);
            var j = parseInt(coords[1]);
    
            if (solution [i][j] == selectedNumber.id){
                this.classList.remove("incorrect-number");
                this.classList.add("correct-number");
                document.getElementById("feedback").innerHTML = "";
            } else {
                this.classList.add("incorrect-number");
                document.getElementById("feedback").innerHTML = "Number is incorrect";
                this.innerText = "";
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

