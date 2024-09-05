function displayDate() {
    "use strict";
    document.getElementById("demo2").innerHTML = new Date();
}

function myFunction() {
    "use strict";
    document.getElementById("demo3").innerHTML += "Hello World ";
}

/*mouse event function*/

var x = 0;
var y = 0;
var z = 0;

function myMoveFunction() {
    "use strict";
    z += 1;
    document.getElementById("demo_1").innerHTML = z;
}

function myEnterFunction() {
    "use strict";
    x += 1;
    document.getElementById("demo_2").innerHTML = x;
}

function myOverFunction() {
    "use strict";
    y += 1;
    document.getElementById("demo_3").innerHTML = y;
}

function bigTxt(x) {
    "use strict";
    x.style.fontSize = "36px";
}


function mouseDown() {
    "use strict";
    document.getElementById("myP").style.color = "red";
}

function mouseUp() {
    "use strict";
    document.getElementById("myP").style.color = "blue";
}


