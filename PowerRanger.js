const Monstruo = require("./Monstruo");


class PowerRanger {
    color = "color por defecto";
    ranger = true;

    ahoraSosDeColor(nuevoColor) {
        this.color = nuevoColor;
    }

    verColor(){
        return this.color;
    }

    seEncuentraCon(serVivo) {
        if (serVivo.ranger == true){
            console.log("Hola, power ranger " + serVivo.verColor() + "!");
        } else if (serVivo.ranger == false) {
            console.log("Eres un monstruo!! Te derrotaré!!")
        }
    }
}

module.exports = PowerRanger;