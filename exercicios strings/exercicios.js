// 1.	calcula o comprimento de uma string (nao use a funcao strlen).

function exe1(str){
    let i = 0
    while(str[i] != undefined){
        i++
    }
    console.log(`O tamanho da string é igual a ${i}`)
}

exe1("francano")

//2.	Ler um nome e imprima o nome somente se a primeira letra do nome for ‘a’ (maiu´scula ou minu´scula).


function exe2(nome){
    
    if(nome[0] == 'A' || nome[0] == 'a' ){
        console.log(nome)
    }
}

exe2("Alysson")

//3.	leia um nome e imprima as 4 primeiras letras do nome.

function exe3(nome){
   
    console.log(nome.slice(0, 4))
   
}

exe3("Alysson")

//4.	Digite um nome, calcule e retorne quantas letras tem esse nome.

function exe4(nome){
   
    return nome.split(" ").join("").length //retirando os espaços com split, juntando os vetores criados com o join e devolvendo o tamanho com length
    
   
}

exe4("Alysson Lemes")


//5.	Ler nome, sexo e idade. Se sexo for feminino e idade menor que 25, imprime o nome da pessoa e a palavra “ACEITA”, caso contra´rio imprimir “NA˜ O ACEITA”.

function exe5(nome, sexo, idade){
   if(sexo.toLowerCase() == 'feminino' && idade < 25){
    console.log(`${nome} ACEITA`)
   }
   else{
    console.log(`${nome} NAO ACEITA`)
   }
   
}

nome = String(prompt(`Insira o nome`))

sexo = String(prompt(`Insira o sexo (feminino ou masculino)`))

idade = Number(prompt(`Insira quantos anos de idade`))

while(idade < 0){

    idade = Number(prompt(`Insira uma idade positiva e válida`))
}
exe5(nome, sexo, idade)
