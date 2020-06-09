var btnAdd = document.querySelectorAll("button")[0];
var btnToggle = document.querySelectorAll("button")[1];
var btnRemove = document.querySelectorAll("button")[2];

var inpAdd = document.querySelectorAll("input")[0];
var inpToggle = document.querySelectorAll("input")[1];
var inpRemove = document.querySelectorAll("input")[2];

var uList = document.querySelector("ol");

//console.log('%c My name is Rage', 'background: #222; color: #bada55');            to display message in console.   just 4 fun.

// Adding event listeners.......................................................

btnAdd.addEventListener("click", addEventClick);
inpAdd.addEventListener("keyup", addEventKeypressed);

btnToggle.addEventListener("click", ToggleEventClick);
inpToggle.addEventListener("keyup", ToggleEventKeypressed);

btnRemove.addEventListener("click", removeEventClick);
inpRemove.addEventListener("keydown", removeEventKeypressed);

// Add item functions............................................................

function addEventClick() {
    if (inpAdd.value.trim().length > 0) {
        var list = document.createElement("li");
        var textNode = document.createTextNode(inpAdd.value);
        list.appendChild(textNode);
        uList.appendChild(list);
        inpAdd.value = "";
        console.log(typeof (inpRemove.value));
    }
}

function addEventKeypressed(event) {
    if (inpAdd.value.trim().length > 0 && event.keyCode === 13) {
        // to clear the default events...
        //event.preventDefault();
        var list = document.createElement("li");
        var textNode = document.createTextNode(inpAdd.value);
        list.appendChild(textNode);
        uList.appendChild(list);
        inpAdd.value = "";
    }
}

// Toggle item functions..........................................................

function ToggleEventClick(){
    var x = document.querySelectorAll("li")[inpToggle.value - 1];
    x.classList.toggle("toggle");
    inpToggle.value = "";
}

function ToggleEventKeypressed(event){
    if (event.keyCode === 84) {                                                     // 84 is keycode of "t"-alphabet key.
        var x = document.querySelectorAll("li")[inpToggle.value - 1];
        x.classList.toggle("toggle");
        inpToggle.value = "";
    }
}

// Remove item functions..........................................................

function removeEventClick() {
    var x = document.querySelectorAll("li")[inpRemove.value - 1];
    x.remove();
    inpRemove.value = "";
}

function removeEventKeypressed(e) {
    if (e.keyCode === 46) {                                                     // 46 is keycode of delete key.
        var x = document.querySelectorAll("li")[inpRemove.value - 1];
        x.remove();
        inpRemove.value = "";
    }
}