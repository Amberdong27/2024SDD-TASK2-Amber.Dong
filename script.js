//9 arrays

var numbers = [
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
        for (var j = 0; j < 3; j++){
            var box = document.createElement ('div');
            box.className = "box";
            box.id = i;
            box.innerText = numbers [j][i];
            row.appendChild(box);
        }
        document.getElementById('board').appendChild(row);
    } 
}

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

function makeGrid3 () { //board for 9x9
    document.getElementById("1").disabled = true;
   // document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("notes").innerHTML = "Rules: Only numbers form 1-9 can be inputted";
    document.getElementById("extra").innerHTML = "Rows and Column must added up to the same number";
    for (var i = 0; i < 9; i++) {
        var row = document.createElement ('div');
        row.className = "row";
        for (var j = 0; j < 9; j++){
            var box = document.createElement ('div');
            box.className = "box";
            box.id = i;
            box.innerText = numbers [j][i];
            row.appendChild(box);
        }
        document.getElementById('board').appendChild(row);
    } 
}

function removeGrid() {
    window.location.reload();
}
