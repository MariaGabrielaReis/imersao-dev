function adicionarFilme () {
  var campoFilme = document.querySelector('#filme')
  var filme = campoFilme.value
  if(filme.endsWith('.png') || filme.endsWith('.jpg') ){
    mostrarFilme(filme)
  } else {
    alert("Não é uma imagem ou não é válida!")
  }
  campoFilme.value = ""
}

function mostrarFilme (filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  var capaFilme = "<img src=" + filme + ">"
  
  listaFilmes.innerHTML = listaFilmes.innerHTML + capaFilme
}