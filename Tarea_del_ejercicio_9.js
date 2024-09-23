
let a = Number(prompt("ingrese el primer numero"))
let b = Number(prompt("ingrese el segundo numero"))
let operacion = prompt("+,-,*,/")

switch(operacion){
    case "+":
        alert(a+b)
        break;
    case "-":
        alert(a-b)
        break;
    case "*":
        alert(a*b)
        break;
    case "/":
        alert(a/b)
        break;
    default:
        alert("No existe esa variable");
}