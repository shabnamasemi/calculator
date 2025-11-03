const  display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(eror){
        display.value = "eror";
    }
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}