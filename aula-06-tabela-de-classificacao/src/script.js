var maby = {
  nome: "Maby",
  vitorias: 21,
  empates: 16,
  derrotas: 7,
  pontos: 0
}

var wllc = {
  nome: "Wallace",
  vitorias: 9,
  empates: 64,
  derrotas: 21,
  pontos: 0
}

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates + (jogador.derrotas * -2)
  
  return pontos
}

maby.pontos = calculaPontos(maby)
wllc.pontos = calculaPontos(wllc)

var jogadores = [maby, wllc]

function exibirJogadores (jogadores) {
  var html = ""
	
  for (var i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].nome + "</td>" 
		html += "<td>" + jogadores[i].vitorias + "</td>"
		html += "<td>" + jogadores[i].empates + "</td>"
		html += "<td>" + jogadores[i].derrotas + "</td>"
		html += "<td>" + jogadores[i].pontos + "</td>"
		html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
		html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
		html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
	}
	
	var tabela = document.getElementById("tabelaJogadores")
	tabela.innerHTML = html
}

exibirJogadores(jogadores)

function adicionarVitoria(i) {
	var jogador = jogadores[i]
	jogador.vitorias++
	jogador.pontos = calculaPontos(jogador)
	exibirJogadores(jogadores)
}

function adicionarEmpate(i) {
	var jogador = jogadores[i]
	jogador.empates++
	jogador.pontos = calculaPontos(jogador)
	exibirJogadores(jogadores)
}

function adicionarDerrota(i) {
	var jogador = jogadores[i]
	jogador.derrotas++
	jogador.pontos = calculaPontos(jogador)
	exibirJogadores(jogadores)
}