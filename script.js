const  display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
            display.value == EvalError(display.value);
    }
    catch(eror){
        display.valueb = "eror";
    }
}