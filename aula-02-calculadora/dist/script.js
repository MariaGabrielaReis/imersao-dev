// criação das variáveis
var n1 = parseInt(prompt("Primeiro valor: "))
var n2 = parseInt(prompt("Segundo valor: "))
//variável de operação escolhida
var escolha = prompt("Digite 1 para soma, 2 para subtração, 3 para multiplicação e 4 para divisão")

if(escolha == "1") {
  //soma
  var resultado = n1 + n2
  document.write("<h2>" + n1 + " + " + n2 + " = " + resultado + " </h2>")
} else if(escolha == "2") {
  //subtração
  var resultado = n1 - n2
  document.write("<h2>" + n1 + " - " + n2 + " = " + resultado + " </h2>")
} else if(escolha == "3") {
  //multiplicação
   var resultado = n1 * n2
   document.write("<h2>" + n1 + " * " + n2 + " = " + resultado + " </h2>")
 } else if(escolha == "4") {
   //divisão
   var resultado = n1 / n2
   document.write("<h2>" + n1 + " / " + n2 + " = " + resultado + " </h2>")
} else {
  document.write("<h2>Opção inválida</h2>")
}