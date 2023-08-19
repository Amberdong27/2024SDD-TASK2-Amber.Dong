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

var numSelected = null;
var tileSelected = null;
var x = 0;

function makeGrid1 () { //board for 3x3 
    document.getElementById("1").disabled = true;
   // document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("notes").innerHTML = "Rules: Only numbers form 1-9 can be inputted";
    document.getElementById("extra").innerHTML = "Rows and Column must added up to the same number";
       for (var i = 0; i < 3; i++) {
        // <div id="0" class="row"></div>
        var row = document.createElement ('div');
        row.className = "row";
        // <input id="0" class="box">
        for (var j = 0; j < 3; j++){
            var tiles = document.createElement ('div');
            tiles.maxLength = 1;
            tiles.className = "box";
            tiles.id = i.toString() + "-" + j.toString();
            if (solution[j][i] != "-"){
                tiles.innerText = solution [j][i];
            }
            row.appendChild (tiles);
            //temporary solution 
            //box.type = "number";
           // box.min = "1";
           // box.max = "9";
        } 
        document.getElementById('board').appendChild(row);
    } 
        for (var r = 0; r < 1; r++) {
            for (var c = 1; c < 10; c++) {
             var numbers = document.createElement ('div');
                numbers.id = c;
                numbers.innerText = c;
        numbers.classList.add("numbers");
        document.getElementById('choices').append(numbers);
        }
    }
  /*  for (var i = 0; i < 3; i ++) {
        for (var j = 0; j < 3; j++) {
            var box = document.createElement ('input');
            box.id = i.toString() + "-" + j.toString();
            box.innerText = puzzle [j][i];
            box.classList.add("box");
            box.style.height = 200;
            box.style.width = 200;
            document.getElementById('board').appendChild(box);
        } */
    }

function makeGrid3 () { //board for 9x9
    document.getElementById("1").disabled = true;
   // document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("notes").innerHTML = "Rules: Only numbers form 1-9 can be inputted";
    document.getElementById("extra").innerHTML = "Rows and Column must added up to the same number";
    for (var i = 0; i < 9; i ++) { // Grid 
        for (var j = 0; j < 9; j++) {
            var tiles = document.createElement ('div');
            tiles.id = i.toString() + "-" + j.toString();
            if (puzzle [i][j] != "-") {
                tiles.innerText = puzzle [i][j];
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
        if (numSelected != null) {
            numSelected.classList.remove("numbers-selected");
        }
        numSelected = this;
        numSelected.classList.add("numbers-selected");
    }
    
    function selectTile (){
        if (numSelected) {
            if (this.innerText != ""){
                return;
            }
            var coords = this.id.split("-");
            x = this;
            var i = parseInt(coords[0]);
            var j = parseInt(coords[1]);
    
            if (solution [i][j] == numSelected.id){
                alert ("correct");
                x.classList.remove("incorrect-number");
                this.innerText = numSelected.id;
            } else {
                alert ("incorrect");
                x.classList.add("incorrect-number");
            }
        }
    }
    function removeNumber() {
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
    } */

/*function makeGrid2 () { //board for 6x6
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("notes").innerHTML = "Rules: Only numbers form 1-6 can be inputted";
    document.getElementById("extra").innerHTML = "Rows and Column must added up to the same number";
    document.getElementById("extra2").innerHTML = "Each box are 3 x 2";
    for (var i = 0; i < 6; i++) {
        var row = document.createElement ('div');
        row.className = "row";
        for (var j = 0; j < 6; j++){
            var box = document.createElement ('div');
            box.className = "box";
            box.id = i;
            box.innerText = numbers [j][i];
            row.appendChild(box);
        }
        document.getElementById('board').appendChild(row);
    } 
} */