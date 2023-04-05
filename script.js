const h1_text = document.getElementById("h1")
const text_changed = document.getElementById("text_changed");
const p_text = document.getElementById("p");

const button_red = document.getElementById("button_red");
const button_green = document.getElementById("button_green");
const button_blue = document.getElementById("button_blue");
const text_select = document.getElementById("text_select");
const h1_select = document.getElementsByName("h1_select");
const input_indent = document.getElementById("input_indent");
const input_changed = document.getElementById("input_changed");

button_red.onclick = function () {
    document.body.style.backgroundColor = "red";
    button_red.disabled = true;
    button_green.disabled = false;
    button_blue.disabled = false;
}

button_green.onclick = function () {
    document.body.style.backgroundColor = "green";
    button_green.disabled = true;
    button_red.disabled = false;
    button_blue.disabled = false;
}

button_blue.onclick = function () {
    document.body.style.backgroundColor = "blue";
    button_blue.disabled = true;
    button_red.disabled = false;
    button_green.disabled = false;
}

text_select.onchange = function () {
    document.body.style.fontFamily = text_select.value;
}

for(let i = 0; i < h1_select.length; i++) {
    h1_select[i].onchange = function() { 
        h1_change(this) 
    }
}

function h1_change(h1) {
    h1_text.style.textDecoration = h1.value;
}

input_indent.oninput = function () {
    p_text.style.textIndent = input_indent.value + "px";
}

input_changed.oninput = function () {
    text_changed.innerHTML = input_changed.value;
}