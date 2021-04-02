var cartas = [
  {
    nome:"Gilfoyle",
    atributos:{
      software: 90,
      hardware: 100
    }
  },
  {
    nome: "Richard Hendricks",
    atributos:{
      software: 100,
      hardware: 40
    }
  },
  {
    nome: "Dinash",
    atributos:{
      software: 80,
      hardware: 70
    }
  }
]

var cartaMaquina, cartaJogador

function sortearCarta() {
  var numCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numCartaMaquina]
  
  var numCartaJogador = parseInt(Math.random() * 3)
  
  while (numCartaMaquina == numCartaJogador ) {
    var numCartaJogador = parseInt(Math.random() * 3)
  }
  
  cartaJogador = cartas[numCartaJogador]
  console.log(cartaJogador)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes')
  var texto = ""
  for (var atributo in cartaJogador.atributos){
    texto += "<input type='radio' name='atributo' value='" + atributo + "' >" + atributo
  }
  opcoes.innerHTML = texto
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo')
  
  for(var i = 0; i < radioAtributo.length; i++){
    if(radioAtributo[i].checked){
      return radioAtributo[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
 
  if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    alert("Você venceu!")
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    alert("Você perdeu!")
  } else {
    alert("Deu empate!")
  }
  
  console.log(cartaMaquina)
}