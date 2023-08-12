
function makeGrid1 () {
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
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
/*function gameLoop(playerClicked){
    if (playerClicked == 'one'){
            alert ("grid");
           /*for (let i = 0; i < 3; i++){
                for (let j = 0; j < 3; j++ ){
                    const cell = document.createElement('div');
                    cell.callList.add('cell');
                    grid.appendChild(cell);
                    alert ("creating grid");
                } 
            } else {
        if (playerClicked == 'two'){
            alert ("Hello, World 2");
        } else {
            if (playerClicked == 'three'){
                alert ("Hello, World 3");
            }
        }
    }
} */
