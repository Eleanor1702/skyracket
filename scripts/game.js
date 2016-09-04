document.addEventListener("keypress", function(event) {
    var i = event.charCode;
    var Up = 119;
    var Down = 115;
    var Right = 100;
    var Left = 97;
    if ( i === Down ) {
        movement.style.top = movement.getBoundingClientRect().y + 50 + "px";
    } else if ( i === Up) {
        movement.style.top = movement.getBoundingClientRect().y - 50 + "px";
    } else if ( i === Right) {
        movement.style.left = movement.getBoundingClientRect().x + 50 + "px";
    } else if ( i === Left) {
        movement.style.left = movement.getBoundingClientRect().x - 50 + "px";
    }
});
var movement = document.getElementById("spaceShip");