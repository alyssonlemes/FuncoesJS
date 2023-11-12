// 1.	calcula o comprimento de uma string (nao use a funcao strlen).

function exe1(str) {
  let i = 0;
  while (str[i] != undefined) {
    i++;
  }
  console.log(`O tamanho da string é igual a ${i}`);
}

exe1("francano");

//2.	Ler um nome e imprima o nome somente se a primeira letra do nome for ‘a’ (maiu´scula ou minu´scula).

function exe2(nome) {
  if (nome[0] == "A" || nome[0] == "a") {
    console.log(nome);
  }
}

exe2("Alysson");

//3.	leia um nome e imprima as 4 primeiras letras do nome.

function exe3(nome) {
  console.log(nome.slice(0, 4));
}

exe3("Alysson");

//4.	Digite um nome, calcule e retorne quantas letras tem esse nome.

function exe4(nome) {
  return nome.split(" ").join("").length; //retirando os espaços com split, juntando os vetores criados com o join e devolvendo o tamanho com length
}

exe4("Alysson Lemes");

//5.	Ler nome, sexo e idade. Se sexo for feminino e idade menor que 25, imprime o nome da pessoa e a palavra “ACEITA”, caso contra´rio imprimir “NA˜ O ACEITA”.

function exe5(nome, sexo, idade) {
  if (sexo.toLowerCase() == "feminino" && idade < 25) {
    console.log(`${nome} ACEITA`);
  } else {
    console.log(`${nome} NAO ACEITA`);
  }
}

nome = String(prompt(`Insira o nome`));

sexo = String(prompt(`Insira o sexo (feminino ou masculino)`));

idade = Number(prompt(`Insira quantos anos de idade`));

while (idade < 0) {
  idade = Number(prompt(`Insira uma idade positiva e válida`));
}
exe5(nome, sexo, idade);

//6 Fazer uma funcao que compara duas strings

function exe6(str1, str2) {
  if (str1 == str2) {
    console.log("As strings são iguais");
  } else {
    console.log("As strings são diferentes");
  }
}

exe6(prompt("Informe o nome 1"), prompt("Informe o nome 2"));

//7.	Conte o nu´mero de 1’s que aparecem em um string.  Exemplo: “0011001” -> 3

function exe7(str) {
  let cont = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 1) {
      cont++;
    }
  }
  console.log(`A quantidade de 1 é igual a ${cont}`);
}

exe7(prompt("Informe a string com numeros"));

//8.	Substitui as ocorreˆncias de um caractere ‘0’ em uma string por outro caractere ‘1’.

function exe8(str) {
  let newString = str.replace(/0/g, "1");

  console.log(`String com o 0 substituido por 1: ${newString}`);
}

exe8(prompt("Informe a string com numeros"));

//9.	Receba uma palavra e a imprima de tra´s-para-frente

function exe9(str) {
  let vetor = [];
  for (let i = str.length; i > 0; i--) {
    vetor.push(str[i - 1]);
  }
  console.log(vetor.join(""));
}

exe9(prompt("Informe a palavra "));

//10.	Receba do usua´rio uma string. O programa imprime a string sem suas vogais.

function exe10(str) {
  let vogais = ["a", "e", "i", "o", "u"];
  let nova = [];
  for (let i = 0; i < str.length; i++) {
    if (!vogais.some((item) => item == str[i])) {
      nova.push(str[i]);
    }
  }
  console.log(nova.join(""));
}

exe10(prompt("Informe uma palavra"));

//11.	Receba uma palavra e calcule quantas vogais (a, e, i, o, u) possui essa palavra. Entre com um caractere (vogal ou consoante) e
//substitua todas as vogais da palavra dada por esse caractere.

function exe11(str) {
  let vogais = ["a", "e", "i", "o", "u"];
  let contador = 0;
  for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i].toLowerCase())) {
      contador++;
    }
  }
  console.log(`A quantidade de vogais na palavra é igual a ${contador}`);
}

exe11(prompt("Informe uma palavra"));

//12.	Ler uma frase e contar quantos caracteres sa˜o espac¸os em brancos.

function exe12(str) {
  let espaco = " ";
  let contador = 0;
  for (let i = 0; i < str.length; i++) {
    if (espaco.includes(str[i].toLowerCase())) {
      contador++;
    }
  }
  console.log(`A quantidade de espaços na string é igual a ${contador}`);
}

exe12(prompt("Informe uma string"));

//13.	Leia um vetor contendo letras de uma frase inclusive os espac¸os em branco.
//Retirar os espac¸os em branco do vetor e depois escrever o vetor resultante.

function exe13(str) {
  let novo = str.split(" ");
  let novoSemEspaco = novo.join("");

  console.log(`A nova string é ${novoSemEspaco}`);
}

exe13(prompt("Informe uma string"));

//14.	Fac¸a um programa em que troque todas as ocorreˆncias de uma letra L1 pela letra L2 em uma string.
// A string e as letras L1 e L2 devem ser fornecidas pelo usua´rio.

function exe14(str, l1, l2) {
  let novaString = "";
  for (let i = 0; i < str.length; i++) {
    if (l1.includes(str[i])) {
      novaString += l2;
    } else {
      novaString += str[i];
    }
  }
  console.log(`A palavra com as letras substituídas é ${novaString}`);
}

exe14(
  prompt("Informe uma string"),
  prompt("Informe a letra 1 que será trocada"),
  prompt("Informe a letra que irá substituir a letra 1")
);

//15.	Leia a idade e o primeiro nome de 10 pessoas. Seu programa deve terminar quando uma idade negativa for digitada. Ao terminar,
// seu programa deve escrever o nome e a idade das pessoas mais jovens e mais velhas.
function exe15() {
  let nomes = [];
  let idades = [];

  for (let i = 0; i < 10; i++) {
    let nome = prompt(`Informe o nome da pessoa ${i + 1}`);
    let idade = parseInt(prompt(`Informe a idade de ${nome}`));

    if (idade < 0) {
      break; //Para o programa quando a idade negativa for digitada
    }

    nomes.push(nome);
    idades.push(idade);
  }

  if (nomes.length === 0) {
    console.log("Nenhuma pessoa foi cadastrada.");
    return;
  }

  // Encontrando a pessoa mais jovem e mais velha
  let indiceMaisJovem = 0;
  let indiceMaisVelha = 0;

  for (let i = 1; i < nomes.length; i++) {
    if (idades[i] < idades[indiceMaisJovem]) {
      indiceMaisJovem = i;
    }

    if (idades[i] > idades[indiceMaisVelha]) {
      indiceMaisVelha = i;
    }
  }

  console.log(
    `A pessoa mais jovem é ${nomes[indiceMaisJovem]} com ${idades[indiceMaisJovem]} anos.`
  );
  console.log(
    `A pessoa mais velha é ${nomes[indiceMaisVelha]} com ${idades[indiceMaisVelha]} anos.`
  );
}

//16.	Receba  duas  frases  distintas  e  imprima  de  maneira  invertida, trocando as letras A por *.
function exe16(frase1, frase2) {
  let frase1Invertida = frase1.split("").reverse().join("").toUpperCase();
  let frase2Invertida = frase2.split("").reverse().join("").toUpperCase();

  let frase1Final = frase1Invertida.replace(/A/g, "*");
  let frase2Final = frase2Invertida.replace(/A/g, "*");

  console.log(`A frase 1 invertida e substituida é: ${frase1Final}`);
  console.log(`A frase 2 invertida e substituida é: ${frase2Final}`);
}

exe16(prompt("Informe a frase 1"), prompt("Informe a frase 2"));

//17.	Recebe uma string S e inteiros na˜o-negativos I e J e imprima o segmento S[I..J].

function exe17(str) {
  let I = Number(
    prompt(
      "Digite um numero inteiro não negativo para o primeiro valor do intervalo"
    )
  );
  while (I < 0) {
    let I = Number(
      prompt(
        "Digite um numero inteiro não negativo para o primeiro valor do intervalo"
      )
    );
  }
  let J = Number(
    prompt(
      "Digite um segundo numero inteiro não negativo para o segundo valor do intervalo"
    )
  );
  while (J < 0) {
    let J = Number(
      prompt(
        "Digite um segundo numero inteiro não negativo para o segundo valor do intervalo"
      )
    );
  }
  let resultado = str.slice(I, J + 1);
  console.log(
    `Lendo apenas o intervalo da string com base nos numeros digitados fica: ${resultado}`
  );
}

exe17(prompt("Informe a string"));

//18.	Recebe  do  usua´rio  uma  string  S,  um  caractere  C,  e  uma posic¸a˜o I e devolve o ´ındice
//da primeira posic¸a˜o da string onde foi encontrado o caractere C. A procura deve comec¸ar a partir da posic¸a˜o I.

function exe18(s, c, i) {
  let posicao = 0;

  posicao = s.indexOf(c, i); //o indexOf nesse formato considera a posição I inserida pelo usuário

  console.log(
    `A posição do caractere digitado a partir da posição inserida é: ${posicao}`
  );
}

exe18(
  prompt("Informe a string S:"),
  prompt("Informe o caractere C:"),
  prompt("Informe uma posição I: ")
);

//19.	leia duas palavras e diga qual deles vem primeiro na ordem alfabe´tica. Dica: ‘a’ e´ menor do que ‘b’.
function exe19(str1, str2) {
  if (str1[0] < str2[0]) {
    console.log("Lista de palavras na ordem alfabética:");
    console.log(str1);
    console.log(str2);
  } else {
    console.log("Lista de palavras na ordem alfabética:");
    console.log(str2);
    console.log(str1);
  }
}

exe19(
  prompt("Informe a primeira palavra:"),
  prompt("Informe a segunda palavra:")
);

//20.	O co´digo de Ce´sar e´ uma das mais simples e conhecidas te´cnicas de criptografia. E´  um tipo de substituic¸a˜o na qual cada letra do texto e´ substitu´ıda por outra, que se apresenta no alfabeto abaixo dela um nu´mero fixo de vezes.  Por exemplo, com uma troca de treˆs posic¸o˜es, ‘A’ seria substitu´ıdo por ‘D’, ‘B’ se tornaria ‘E’, e assim por diante. Fac¸a uso desse Co´digo de Ce´sar (3 posic¸o˜es), entre com uma string e retorne a string codificada. Exemplo:
//String: a ligeira raposa marrom saltou sobre o cachorro cansado
//Nova string: D OLJHLUD UDSRVD PDUURP VDOWRX VREUH R FDFKRUUR FDQVDGR

function exe20(str) {
  let novaString = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // Caracteres maiúsculos
      let novoCharCode = ((charCode - 65 + 3) % 26) + 65;
      novaString += String.fromCharCode(novoCharCode);
    } else {
      // Outros caracteres (não são alterados)
      novaString += str[i];
    }
  }
  console.log("Frase convertida para o código de César: ");
  console.log(novaString);
}

exe20(prompt("Informe a frase que será convertida para o código de César:"));

//21.	Dada uma string, diga se ela e´  um pal´ındromo ou na˜o.  Lembrando que um pal´ındromo e´  uma palavra que tenha a propriedade de poder ser lida tanto da direita para a esquerda como da esquerda para a direita. Exemplo:

//ovo
//arara
//Socorram-me,  subi  no  ^onibus  em  Marrocos.
//Anotaram a data da maratona

function exe21(str) {
  // Remover espaços e converter para letras minúsculas
  let fraseSemEspacos = str.replace(/\s/g, "").toLowerCase();

  // Inverter a string
  let fraseInvertida = fraseSemEspacos.split("").reverse().join("");

  // Verificar se é um palíndromo
  if (fraseSemEspacos === fraseInvertida) {
    console.log("A frase é um palíndromo.");
  } else {
    console.log("A frase não é um palíndromo.");
  }
}

exe21(prompt("Informe a frase :"));

//22.	Leia duas strings fornecidas pelo usua´rio e verifique se a se- gunda string lida
//esta contida no final da primeira, retornando o resultado da verificac¸a˜o.

function exe22(str1, str2) {
  // Verificar se a segunda string está no final da primeira
  let posicaoInicio = str1.length - str2.length;
  if (posicaoInicio < 0) {
    console.log("A segunda string não está contida no final da primeira.");
  }

  let substringNoFinal = str1.substring(posicaoInicio);
  if (substringNoFinal === str2) {
    console.log("A segunda string está contida no final da primeira.");
  } else {
    console.log("A segunda string não está contida no final da primeira.");
  }
}

exe22(prompt("Informe a string1 :"), prompt("Informe a string 2:"));

//23.	Leia duas strings, str1 e str2, e um valor inteiro positivo N.
// Concatene na˜o mais que N caracteres da string str2 a` string str1 e termine str1 com ‘\0’.

function exe23(str1, str2, N) {
  // Concatenar no máximo N caracteres de str2 a str1
  let str1OriginalLength = str1.length;

  for (let i = 0; i < N && i < str2.length; i++) {
    str1 += str2[i];
  }

  // Terminar str1 com '\0'
  str1 += "\0";

  console.log(`Resultado da concatenação: ${str1}`);
}

exe23(
  prompt("Informe a string1 :"),
  prompt("Informe a string 2:"),
  prompt("Informe um valor inteiro positivo N:")
);

//24.	Leia duas cadeias de caracteres A e B. Determine quantas vezes a cadeia A ocorre na cadeia B.
function exe24(cadeiaA, cadeiaB) {
  let cont = 0;
  let posicao = cadeiaB.indexOf(cadeiaA);

  while (posicao !== -1) {
    cont++;
    posicao = cadeiaB.indexOf(cadeiaA, posicao + 1);
  }

  console.log(
    `A cadeia "${cadeiaA}" ocorre ${cont} vezes na cadeia "${cadeiaB}".`
  );
}
exe24(prompt("Informe a cadeia A: "), prompt("Informe a cadeia B:"));

//25 25.	Leia uma cadeia de caracteres no formato “DD/MM/AAAA” e copie o dia, meˆs e ano para 3 varia´veis inteiras.
//Antes disso, verifique se as barras esta˜o no lugar certo, e se DD, MM e AAAA sa˜o nume´ricos.

function exe25(input) {
  // Verificar o formato e a presença das barras
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(input)) {
    // Extrair dia, mês e ano
    let partes = input.split("/");
    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1]);
    let ano = parseInt(partes[2]);

    // Verificar se DD, MM e AAAA são numéricos
    if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
      console.log(`Dia: ${dia}, Mês: ${mes}, Ano: ${ano}`);
    } else {
      console.log("Formato inválido: DD, MM e AAAA devem ser numéricos.");
    }
  } else {
    console.log("Formato inválido. A data deve estar no formato DD/MM/AAAA.");
  }
}
exe25(prompt("Informe a data no formato DD/MM/AAAA:"));
