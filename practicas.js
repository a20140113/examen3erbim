alert("Bienvenido a esta pagina web")
/////////////////
var nom= prompt("Ingrese su Nombre")
/////////////////
var res1= prompt("¿Cuándo se realizará la inauguración de las Olimpiadas? \n A: Lunes 02 de octubre \n B: Viernes 29 de setiembre \n C: Jueves 28 de setiembre");
if(res1=="B"){
    res1 = 50;
}else{
    res1 = 0;
}
/////////////////
var res2= prompt("¿De qué color es la prompoción de 2do de secundaria? \n A: Celeste o Turquesa \n B: Rojo \n C: Morado");
if(res2=="A"){
    res2= 50;
}else{
    res2 = 0;
}
/////////////////
var res3= prompt(" Nuevo deporte incluido este año \n A: Futsal femenino \n B: Balonmano \n C: Marcha atlética");
if(res3=="C"){
    res3 = 50;
}else{
    res3 = 0;
}
/////////////////
var total= res1+res2+res3
if(total=>100){
    "Lo has hecho bien " + nom
}
if(total =50){
    "Puedes hacerlo mejor " + nom
}
if(total =0){
    "Vuelve a intentarlo " + nom
}
document.write("<h1>Practicas</h1>")
document.write("Respuestas <br>")
document.write(nom +" tus resultados son <br>");
document.write(total + " de respuestas correctas")
