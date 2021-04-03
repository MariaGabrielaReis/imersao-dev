var cartas = [
  {
    nome:"Gilfoyle",
    imagem: "https://pbs.twimg.com/profile_images/725321660484583424/ArQ4fM3k_400x400.jpg",
    atributos:{
      software: 95,
      hardware: 100,
      sorte: 85
    }
  },
  {
    nome: "Richard",
    imagem: "https://static.wikia.nocookie.net/godzilla/images/5/51/Thomas_Middleditch.jpg/revision/latest/top-crop/width/360/height/450?cb=20190813155350",
    atributos:{
      software: 100,
      hardware: 40,
      sorte: 20
    }
  },
  {
    nome: "Dinash",
    imagem: "https://siliconvalleyism.com/characters/dinesh-small.jpg",
    atributos:{
      software: 80,
      hardware: 70,
      sorte: 10
    }
  },
  {
    nome: "Cabeção",
    imagem: "https://openpsychometrics.org/tests/characters/test-resources/pics/SV/3.jpg",
    atributos:{
      software: 10,
      hardware: 20,
      sorte: 99
    }
  },
  {
    nome: "Erlich",
    imagem: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-silicon-valley-t-j-miller.jpg",
    atributos:{
      software: 70,
      hardware: 20,
      sorte: 30
    }
  },
  {
    nome: "Gavin Belson",
    imagem: "https://avatars.githubusercontent.com/u/18426436?v=4",
    atributos:{
      software: 50,
      hardware: 20,
      sorte: 50
    }    
  },
  {
    nome: "Carla",
    imagem: "https://www.personality-database.com/profile_images/190603.png?id=138883",
    atributos:{
      software: 80,
      hardware: 60,
      sorte: 40
    }
  },
  {
    nome: "Jian-Yang",
    imagem: "https://siliconvalleyism.com/characters/jian-yang-small.jpg",
    atributos:{
      software: 70,
      hardware: 40,
      sorte: 70
    }
  }
]

var cartaMaquina
var cartaJogador

var pontosJogador = 0
var pontosMaquina = 0
atualizarPlacar()
atualizarQuantidadeCartas() 

function atualizarQuantidadeCartas()  {
  var divQuantiaCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  
  divQuantiaCartas.innerHTML = html
}

function atualizarPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + " | " + pontosMaquina + " Máquina"
  
  divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)
  
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
  
    exibirCartaJogador()
}

function exibirCartaJogador() {
  var divCarta = document.getElementById('carta-jogador')
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCarta.style.backgroundImage = `url(${cartaJogador.imagem})`
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
  }
  
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCarta.innerHTML = moldura + nome + html + "<div id='atributos'>" + opcoesTexto + "</div></div>"
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById('resultado')
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Venceu!</p>"
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Perdeu!</p>"
        pontosMaquina++
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou!</p>"
    }
    
    if(cartas.length == 0){
      alert("Fim de jogo!")
      
      if(pontosJogador > pontosMaquina) {
        htmlResultado = "<p class='resultado-final'>Você venceu!</p>"
      } else if(pontosJogador < pontosMaquina){
        htmlResultado = "<p class='resultado-final'>Você perdeu :(</p>"
      } else {
        htmlResultado = "<p class='resultado-final'>Deu empate!</p>"
      }
      
    } else {
      document.getElementById('btnProximaRodada').disabled = false      
    }
  
    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
    exibirCartaMaquina()
    atualizarPlacar()
    atualizarQuantidadeCartas()
}

function exibirCartaMaquina() {
  var divCarta = document.getElementById('carta-maquina')
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCarta.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  
  var opcoesTexto = ""
  for (var atributo in cartaMaquina.atributos) {
      opcoesTexto += "<p>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
  }
  
  var html = "<div id='opcoes' class='carta-status'>"
  
  divCarta.innerHTML = moldura + nome + html + opcoesTexto + "</div>"
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas')
  divCartas.innerHTML = `<div id='carta-jogador' class='carta'></div><div id='carta-maquina' class='carta'></div>` 
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}