let screen = document.getElementById("input");
buttons = document.querySelectorAll('button');
let screenValue = '';
//screenValue is used to evaluate the expression. 
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if(buttonText == '='){
            screen.value = eval(screenValue);
            //eval takes string as input and evaluates the expression
            
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
};
clear = document.getElementById('clr');
clear.addEventListener('click', function(){
    screenValue = "";
    screen.value = screenValue;
})


