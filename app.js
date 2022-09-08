const PowerRanger = require("./PowerRanger.js");
const Monstruo = require("./Monstruo.js");
/*
    Requisitos
        - el PowerRanger pueda reaccionar al encontrarse con alguien
            - PowerRanger
            - Monstruo
        - cuando el PowerRanger se encuentra con otro PowerRanger este entonces 
            lo saluda refiriendose al color correspondiente
            - poder definir el color
            - poder ver el color
        
       
*/


//CREAMOS OBJETOS DE CLASE POWER_RANGER
const powerRangerUno = new PowerRanger();
const powerRangerDos = new PowerRanger();

const monstruoUno = new Monstruo();

powerRangerUno.ahoraSosDeColor("Rosa");
powerRangerDos.ahoraSosDeColor("Verde");


powerRangerUno.seEncuentraCon(powerRangerDos);
powerRangerDos.seEncuentraCon(powerRangerUno);


/*
     Extra: implementar el comportamiento de "seEncuentraCon"
     para que pueda diferenciar PowerRanger y Monstruo
*/
powerRangerDos.seEncuentraCon(monstruoUno);