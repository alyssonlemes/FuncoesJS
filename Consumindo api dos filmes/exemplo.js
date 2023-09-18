let buscarFilme = async () => {
  let title = document.getElementById("title").value; //pega oque foi digitado no html
  let resposta = await fetch(`http:www.omdbapi.com/?t=${title}&apikey=54ddc12`);
  let dados = await resposta.json(); //Tranformando a string em objeto
  console.log(dados);
  document.getElementById("title").value = dados.title;
  document.getElementById("runTime").value = dados.runTime;
  document.getElementById("actors").value = dados.actors;
  document.getElementById("language").value = dados.language;
  document.getElementById("poster").src = dados.poster;
};
