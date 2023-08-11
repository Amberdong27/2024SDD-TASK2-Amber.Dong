const grid = document.querySelector('.grid');

function gameLoop(playerClicked){
    if (playerClicked == 'one'){
            alert ("grid");
            for (let i = 0; i < 3; i++){
                for (let j = 0; j < 3; j++){
                    const cell = document.createElement('div');
                    cell.callList.add('cell');
                    grid.appendChild(cell);
                }
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
}
