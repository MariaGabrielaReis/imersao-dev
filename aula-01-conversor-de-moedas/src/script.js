// pegar o valor pra converter
var valor = prompt("Valor em dólar: ")
//convertendo o valor para inteiro
var valorDolar = parseFloat(valor)
//multiplicando o valor pelo valor do dólar
var valorReal = valorDolar * 5.50
//mostrar o resultado
alert(valorReal.toFixed(2))