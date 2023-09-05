
let bikes = () => {
    let bikes = []
    let marcas = ["CALOI", "SCOTT", "CANONDALE"]

    let opcao
    do {

        opcao = Number(prompt('Digite 1. Entrada de dados\n 2. Média de preços\n 3. Bike mais antigas\n 4. Bikes Caloi\n 5. Qtde bikes aro 29\n 6. Bike maior quadro\n 7. Sair'))

        switch (opcao) {
            case 1: entradaDados(bikes, marcas)
                break
            case 2: mediaPrecos(bikes)
                break
            case 3: bikeAntiga(bikes)
                break
            case 4: bikeCaloi(bikes)
                break
            case 5: bike29(bikes)
                break
            case 6: bikeQuadroMaior(bikes)
                break
            case 7: alert('Finalizando o programa!!!')
                break
            default: alert('Opção inválida')
        }
    } while (opcao != 7)

}


let entradaDados = (vet1, vet2) => { //vet1 = bikes e vet2 = marcas
    
        let objBike = {
            marca: prompt("Digite a marca da bike").toUpperCase(),
            modelo: prompt("Digite o modelo da bike"),
            quadro: Number(prompt("Digite o quadro da bike")),
            aro: Number(prompt("Digite o aro da bike")),
            ano: Number(prompt("Digite o ano da bike")),
            preco: Number(prompt("Digite o preço da bike"))
        }
        while (!vet2.includes(objBike.marca)) {
            objBike.marca = prompt("Digite a marca correta da bike").toUpperCase()
        }
        // adiciona a bike em bikes
        vet1.push(objBike)
    
}

let mediaPrecos = (obj1) => { //obj1 = bikes
    // média de preço das bikes
    let somaPrecos = 0
    for (let i = 0; i < bikes.length; i++) {
        somaPrecos = somaPrecos + bikes[i].preco
    }
    if(bikes.length == 0){
        alert('Não existem bikes cadastradas')
    }
    else{
    console.log(`A média de preço das bikes é ${somaPrecos / bikes.length}`)
}
}

let bikeAntiga = (obj2) => { //obj2 = bikes

    // qual a bike mais antiga
    if(bikes[i].length == 0){
        alert('Não existem bikes cadastradas')
    }
    else{
    let objAntigo = bikes[0] // é a primeira
    for (let i = 0; i < bikes.length; i++) {
        if (bikes[i].ano < objAntigo.ano) {
            objAntigo = bikes[i]
        }
    }
   
   
    console.log(objAntigo)
    }
}

let bikeCaloi = (objt3) => {

    // quais as bikes são da marca caloi
   
    
    let bikesCaloi = []
    if(bikesCaloi.length == 0){
        alert('Não existem bikes cadastradas')
    }
    else{
    for (let i = 0; i < bikes.length; i++) {
        if (bikes[i].marca == "CALOI") {
            bikesCaloi.push(bikes[i]) // adiciona no vetor
        }
    }
    console.log(bikesCaloi)
}
}

let bike29 = (objt4) => {

    // qts bikes possuem aro 29
    let cont = 0
    for (let i = 0; i < bikes.length; i++) {
        if (bikes[i].aro == 29) {
            cont++
        }
    }
    if(bikes.length == 0){
        alert('Não existem bikes cadastradas')
    }
    else{
    console.log(`Qtde de bikes com aro 29 ${cont}`)
}
}

let bikeQuadroMaior = (objt5) => {

    // qual a bike possui maior quadro
    if(bikes.length == 0){
        alert('nenhuma bike cadastrada')
    }
    else{
    let maiorQuadro = bikes[0]
    for (let i = 0; i < bikes.length; i++) {
        if (bikes[i].quadro > maiorQuadro.quadro) {
            maiorQuadro = bikes[i]
        }

    }
    console.log(maiorQuadro)
}
}

