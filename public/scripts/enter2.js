// instraction of game 
var actionButton = document.getElementById("actionBtn");
var body = document.getElementsByTagName("body")[0];

function toggleActionButton(){
    if ( body.classList.contains('actionsBoxOpen')) {
        body.classList.remove('actionsBoxOpen');
    } else {
        body.classList.add('actionsBoxOpen');
    }
}

actionButton.addEventListener('click', toggleActionButton );
