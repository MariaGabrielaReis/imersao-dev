var numSecreto = parseInt(Math.random() * 10) // multiplica por 10 pq o random é só de nºs entre 0 e 1
var tentativas = 3

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um nº entre 0 e 10: "))
  
  if(chute == numSecreto) {
    alert("Acertou!!")
    break
  } else if (chute > numSecreto){
    alert("Chute muito alto!")
    tentativas = tentativas - 1
  } else if (chute < numSecreto){
    alert("Chute muito baixo!")
    tentativas = tentativas - 1
  } 
}

if (chute != numSecreto) {
  console.log("Suas tentativas acabaram, o nº secreto era " + numSecreto)
}