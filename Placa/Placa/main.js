// Cargamos gove
var groveSensor = require('jsupm_grove');

// Ponemos el boton en el 5
var button1 = new groveSensor.GroveButton(5);
var button2 = new groveSensor.GroveButton(6);

var personas = 0;


var B1 = 0;
var B2 = 0;

var estado = 0;

// Leemos la entrada
function readButtonValue() {
    B1 = button1.value();
    B2 = button2.value();
    
    if(B1==0 && B2 ==1){
        if(estado == 0){
            estado = 1;
        }
        else if(estado == 2){
            personas--;
            estado = 0;
        }
    }
    
    else if (B1==1 && B2==0){
        if(estado == 0){
            estado = 2;
        }
        else if(estado == 1){
            personas++;
            estado = 0;
        }
    }
    console.log(personas);
}
setInterval(readButtonValue, 100);