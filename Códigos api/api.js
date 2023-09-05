//função assincrona pois irá realizar uma requisição para api
//e não vai esperar a resposta para continuar a execução do código
//isso é uma promise que vai ser resolvida quando a resposta chegar

async function buscaCep(){

    //pega o valor do input
    let cep = document.getElementById('cep').value

    //faz a requisição para a api
    //await é aguardar pela resposta da requisição(promise)
    let resposta = await fetch (`https://viacep.com.br/ws/${cep}/json/`)

    //await é uma forma de aguardar a resposta da api pois existe uma promessa de que haverá um retorno(promise)
    //fetch é uma função que faz a requisição para a api

    //transforma a resposta em um objeto
    let dados = await resposta.json()

    //pega o elemento que vai ser alterado
    document.getElementById('logradouro').value = dados.logradouro
    document.getElementById('complemento').value = dados.complemento
    document.getElementById('bairro').value = dados.bairro
    document.getElementById('localidade').value = dados.localidade
    document.getElementById('uf').value = dados.uf
    document.getElementById('ibge').value = dados.ibge
    document.getElementById('gia').value = dados.gia
    document.getElementById('ddd').value = dados.ddd
    document.getElementById('siafi').value = dados.siafi

}