let votacao = () => {

    let vetPartidos = []
    let vetCandidatos = []
    let opcao 

    do{
        opcao = Number(prompt('Escolha \n 1. Cadastrar partido \n 2. Cadastrar candidato \n 3. Votar \n 4. Sair'))

        switch(opcao){
            case 1: cadastrarPartido(vetPartidos)
                    break
            case 2: cadastrarCandidato(vetCandidatos, vetPartidos)
                    break
            case 3: votar(vetCandidatos)
                    break
            case 4: alert('Programa será encerrado')
                    break

            default: alert('Opção inválida')
        }
    }while(opcao != 4)

}

let cadastrarPartido = (vetPartidos) =>{
    let objPartido = {
        codigo: Number(prompt('Insira o código do partido')),
        nome: prompt('Informe o nome do partido'),
        sigla: prompt('Informe a sigla do partido'),
        presidente: prompt('Informe o presidente do partido'),
        nroCandidatos: Number(prompt('Informe o numero de candidatos'))
    }
    /*verificando se o partido existe(some verifica se já existe um código de um obj Partido no vet partidos) e adicionando o obj no vetor
    item representa cada item que estará sendo buscando dentro do vetor, é uma variável local que fncionará apenas no some para verificar a existencia do código*/
    while(vetPartidos.some((item) => item.codigo == objPartido.codigo)){
        alert('Codigo do partido ja existente')
        objPartido.codigo = Number(prompt('Informe o codigo novamente'))
    }

//adiciona partido no vetor
    vetPartidos.push(objPartido)

}

let cadastrarCandidato = (vetCandidatos, vetPartidos) =>{
    let objCandidato = {
        codPartido: Number(prompt('Insira o código do partido do candidato')),
        nome: prompt('Informe o nome do candidato'),
        qtde: 0,
        cargo: prompt('Informe o cargo do candidato')
    }
    //percorre vetor de partidos
    //a negação do some verifica se não existe partido com o código digitado
    while(!vetPartidos.some((item) => item.codPartido == objPartido.codPartido)){
        objPartido.length == 0 ? alert('Sem partido') : alert('Partido não existe') // operador ternário
        objCandidato.codPartido = Number(prompt('Informe partido que existe'))
    }

    //adiciona obj no vetor
    vetCandidatos.push(objCandidato)
}

let votar = (vetCandidatos) =>{
    let codigoPartidoVoto = Number(prompt('Informe o código do partido que ira votar'))
    let nomeCandidato = prompt('Informe o nome do candidato que ira votar')

    //percorrer o vetor para encontrar o candidato
    let achou = false
    for(let i = 0; i < vetCandidatos.length; i++){
        if(vetCandidatos[i].codPartido == codigoPartidoVoto && vetCandidatos[i].nome == nomeCandidato){
            vetCandidatos[i].qtde++
            alert('Voto computado com sucesso')
            achou = true
        }
    }
    if(!achou){
        alert('Partido ou candidato não existem')
    }

}

