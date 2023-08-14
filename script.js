
function makeGrid1 () {
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("notes").innerHTML = "Rules: Only numbers form 1-9 can be inputted";
    document.getElementById("extra").innerHTML = "Rows and Column must added up to the same number";
    for (var i = 0; i < 3; i++) {
        var row = document.createElement ('div');
        row.className = "row";
        for (var j = 0; j < 3; j++){
            var box = document.createElement ('div');
            box.className = "box";
            row.appendChild(box);
        }
        document.getElementById('boxParent').appendChild(row);
    } 
}

function makeGrid2 () {
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
            row.appendChild(box);
        }
        document.getElementById('boxParent').appendChild(row);
    } 
}

function makeGrid3 () {
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("notes").innerHTML = "Rules: Only numbers form 1-9 can be inputted";
    document.getElementById("extra").innerHTML = "Rows and Column must added up to the same number";
    for (var i = 0; i < 9; i++) {
        var row = document.createElement ('div');
        row.className = "row";
        for (var j = 0; j < 9; j++){
            var box = document.createElement ('div');
            box.className = "box";
            row.appendChild(box);
        }
        document.getElementById('boxParent').appendChild(row);
    } 
}

function removeGrid() {
    window.location.reload();
}