
let numberInput = parseInt(prompt("Ingrese un numero:"));



if (numberInput != "") {
    if (numberInput >= 0 && numberInput <= 10) {
        console.log("El numero esta entre 0 y 10");
    } else if (numberInput > 10 && numberInput < 101){
        console.log("El numero esta entre 10 y 100");
    } else if (numberInput > 100 && numberInput < 1001){
        console.log("El numero esta entre 100 y 1000");
    }else{
        console.log("El numero es mayor a 1000");
    }
}else{  
    console.log("Ingrese un numero");
}



for (let i = 1; i < 11; i++) {
    showNumber(numberInput, i);
}


function showNumber(number, interacion) {
    console.log("El numero ingresado es: ", number, "Numero de iteracion: ", interacion);
    console.log("El numero ingresado mas el numero de iteracion: ", number + interacion);
}