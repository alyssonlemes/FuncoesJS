function principal(){
    let vetor = []
    cadastra(vetor)
    multiplicaPor2(vetor)
    exibe(vetor)
}
function cadastra(vetor){
    vetor[0] = 10
    vetor[1] = 20
    vetor[2] = 30
    vetor[3] = 40
}
function multiplicaPor2(vetor){
    for(let i=0;i<vetor.length;i++){
        vetor[i] = vetor[i] * 2
    }
}
function exibe(vetor){
    console.log(vetor)
}

principal()