async function buscaFilme() {
  //pega o valor do input
  let Title = document.getElementById("Title").value;

  //faz a requisição para a api
  //await é aguardar pela resposta da requisição(promise)
  let resposta = await fetch(
    `https://www.omdbapi.com/?apikey=766676a1&t=${Title}`
  );

  //await é uma forma de aguardar a resposta da api pois existe uma promessa de que haverá um retorno(promise)
  //fetch é uma função que faz a requisição para a api

  //transforma a resposta em um objeto
  let dados = await resposta.json();

  //pega o elemento que vai ser alterado
  document.getElementById("Language").value = dados.Language;
  document.getElementById("Plot").value = dados.Plot;
  document.getElementById("Actors").value = dados.Actors;
  document.getElementById("Poster").src = dados.Poster;
}
