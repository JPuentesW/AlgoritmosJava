function saludo() {
    alert ("Hola mundo")
}
function suma(){
    //Declaramos las variables necesarias
    let A = 0;
    let B = 0;
    let C = 0;
    // Solicitamos los valores y los asignamos en las variables
    A= parseInt(prompt("Por favor ingrese el primer valor a sumar"))
    B= parseInt(prompt("Por favor ingrese el segundo valor"))
// Realizamos las operaciones necesarias
C=A+B;
//Mostramos el resultado en pantalla
alert("el resultado de la suma es " +C )
console.log("El resultado es" +C )

}
function operacionesBasicas(){
    //Declaramos variables
    let A=0;
    let B=0;
    let C=0;
    let D=0;
    let E=0;
    let F=0;
    //Solicitamos los valores para asignar a las variables
    A=parseInt(prompt("Por favor ingrese el primer numero"))
    B=parseInt(prompt("Por favor ingrese el segundo numero"))
    C=A+B
    D=A-B
    E=A*B
    F=A/B
    //Mostramos el resultado en pantalla
    alert("El resultado de la suma es " +C )
    alert("El resultado de la resta es " +D )
    alert("El resultado de la multiplicacion es " +E )
    alert("El resultado de la division es " +F )
    

}
function cuadradodeunNumero(){
    //Declaramos variables
    let A=0;
    let B=0;
    //Solicitamos el numero 
    A=parseInt(prompt("Por favor ingrese el primer numero"));
    B=A*A;
    //Mostramos el resultado
    alert("El resultado es " +B)
    
}
function conversiondemetrosaPulgadas(){
    //Declaramos variables
    let A=0;
    let B=0;
    let C=0;
    //Solicitamos numeros
    A=parseInt(prompt("Ingrese su valor en metros"));
    B=A*39.32;
    C=A*100;
    //Mostramos el resultado
    alert("El resultado en pulgadas es " +B);
    alert("El resultado en centimetros es " +C);
}
function promediode7notas(){
    let A=0;
    let B=0;
    let C=0;
    let D=0;
    let E=0;
    let F=0;
    let G=0;
    let H=0;
    //Solicitamos numeros
    A=parseInt(prompt("Por favor ingrese la primera nota"));
    B=parseInt(prompt("Por favor ingrese la primera nota"));
    C=parseInt(prompt("Por favor ingrese la primera nota"));
    D=parseInt(prompt("Por favor ingrese la primera nota"));
    E=parseInt(prompt("Por favor ingrese la primera nota"));
    F=parseInt(prompt("Por favor ingrese la primera nota"));
    G=parseInt(prompt("Por favor ingrese la primera nota"));
    H=(A+B+C+D+E+F+G)/7;
    if(H>=6)alert("Usted aprobo la materia con " +H )
    else alert("Usted reprobo la materia con " +H );

    }

    
function mayorentredosnumeros(){
    let A=0
    let B=0
    A=parseInt(prompt("Por favor ingrese el primer numero"));
    B=parseInt(prompt("Ingrese el segundo "));
        if(A===B)   alert("Son iguales");
        else if(A>B)alert("El numero mayor es " +A );
        else alert("El numero mayor es " +B );
    }

function menorentre3numeros(){
    let A=0
    let B=0
    let C=0
    A=parseInt(prompt("Ingrese el primer numero"));
    B=parseInt(prompt("Ingrese el segundo numero"));
    C=parseInt(prompt("Ingrese el tercer numero"));
    if (A==B && B==C){
        alert("Los numeros son iguales");
    } else if (A<B  && A<C) {
        alert("El numero menor es " +A );
    } else if (B<A  && B<C){
        alert("El numero menor es el " +B );
    } else {
        alert("El numero menor es el " +C );
    }

}
function paroimpar(){
    let A=0
    A=parseInt(prompt("Ingrese el numero"));
    if (A % 2 == 0){
        alert("El numero es par");
    }else {
        alert("El numero es impar")
    }
}
function areadeuntriangulo(){
    let A=0
    let B=0
    let C=0
    A=parseInt(prompt("Ingrese el valor de la base"));
    B=parseInt(prompt("Ingrese el valor de la altura"));
    C=(A*B)/2;
    alert("El area del triangulo es " +C );

}
function AN(){
    let A=new Date().getFullYear()
    let B=0
    let C=0
    B=parseInt(prompt("Ingrese su edad"));
    C=A-B;
    alert("Su año de nacimiento es " +C );
}
function CDT(){
    let A=0;
    let B=0;
    let C=0;
    let D=0;
    A=parseInt(prompt("Ingrese el numero de años que desea tener su CDT"));
    B=parseInt(prompt("Ingrese el valor del capital a invertir"));
    C=(B*0.204)*A;
    D=C+B;  
    alert("Su ganancia en total sumando el capital invertido seria de " + D );
}


function frutas()   {
    A = "";
    Tipo = 0;
    Descuento = 0;
    Valor = 0;
    Cantidad = 0;
A=prompt("Cual fruta va a comprar:");
Valor=parseInt(prompt("Ingrese el precio por kilo:"));
Cantidad=parseInt(prompt("Ingrese la cantidad en kilos:"));
if (A === "Manzana") {
   Tipo = 0; 
}

else if (A === "Peras") {
    Tipo = 1;
 }
 else if (A === "Sandias") {
    Tipo = 2; 
    
 }
 else{
    alert("La fruta es incorrecta")
 }
 switch (Tipo) {
    case 0:
        if (Cantidad > 0 && Cantidad <= 2){
            Descuento = 2;
        }
        else if (Cantidad > 2 && Cantidad <= 5){
            Descuento = 4;
        }
        else if (Cantidad > 5 && Cantidad <= 10){
            Descuento = 10;
        }
        else {
            Descuento = 17;
        }
        Valor = (Cantidad*Valor)-((Descuento/100)*(Cantidad*Valor));
        break;
    case 1:
        if (Cantidad > 0 && Cantidad <= 2){
            Descuento = 3;
        }
        else if (Cantidad > 2 && Cantidad <= 5){
            Descuento = 6;
        }
        else if (Cantidad > 5 && Cantidad <= 10){
            Descuento = 12;
        }
        else {
            Descuento = 18;
        }
        Valor = (Cantidad*Valor)-((Descuento/100)*(Cantidad*Valor));
        break;
    case 2:
        if (Cantidad > 0 && Cantidad <= 2){
            Descuento = 6;
        }
        else if (Cantidad > 2 && Cantidad <= 5){
            Descuento = 8;
        }
        else if (Cantidad > 5 && Cantidad <= 10){
            Descuento = 15;
        }
        else{
            Descuento = 20;
        }
        Valor = (Cantidad*Valor)-((Descuento/100)*(Cantidad*Valor));
        break;
    }
    alert("El valor a pagar es: " + Valor);
}