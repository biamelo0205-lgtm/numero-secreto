// AULA ------------------
alert('Boas Vindas ao jogo do número secreto'); 
// você pode colocar *10, 100, 1000, dependendo da quantidade de números que você queira que o jogador possa chutar.
let numeroMax = 100;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1); 
// let numeroSecreto = parseInt(Math.random() * 100 + 1); 
// let chute = prompt('escolha um número entre 1 e 10');
// deixa uma variável vazia, pois vai ser utiliazada o while.
let chute;
console.log('Valor do número secreto' , numeroSecreto);
console.log('Valor do chute:' , chute);
console.log('Resultado da comparação:' ,  chute == numeroSecreto);
let tentativas = 1;

// o ciclo se rompe assim que você acertar o número secreto, indo para o início do jogo
// depois do while, ainda está na primeira tentativa,depois do if não dá pois assim o jogador só saberia as tentativas se acertasse, então as contagem de tentativas tem que estar 
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMax}:`);

    if (chute == numeroSecreto ) {
        console.log('Isso aí, você descobriu o número secreto' + numeroSecreto);
        break;

    // template strings (forma de concatenar strings e variáveis, usa crase e insere as variaveis dentro de ${}). ao invés dele, para concatenar também pode ser utilizado as string dentro do '' e usa o + fora para adicionar a variável.
    } else {
        alert('Você errou');
        if ( chute < numeroSecreto){
            alert(`O número secreto é maior que ${chute}`);
        } else{
            alert(`O número secreto é menor que ${chute}`);
        }
    }
    //tentativas = tentativas + 1; ou--v que é uma forma de incrementar 1 a uma vqariável.
    tentativas++;
}
// forma de diminuir o código que tem apenas letras de diferença. Nessa sintaxe, depois da ? a gente diz como vai ser se ela for verdadeira, e coloca o : para indicar o que fazer se for falsa. OPERADOR TERNÁRIO ( condição ? valorSeVerdadeiro : valorSeFalso.)

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Parabéns, você acertou ${numeroSecreto} em ${tentativas} ${palavraTentativa}.`)
// if (tentativas > 1){
//     alert(`Parabéns, você acertou ${numeroSecreto} com ${tentativas} tentativas.`);
// } else{
//     alert(`Parabéns, você acertou ${numeroSecreto} com ${tentativas} tentativa.`);
// }







// ATIVIDADE---------------------
// console.log('Boas Vindas.');
// let nome = 'Ana';
// console.log(`Olá ${nome}!`);
// alert(`Olá ${nome}!`);
// let lingFav = prompt('Qual a linguagem de programação que você mais gosta?');
// console.log(lingFav);

// let valor1 = 6;
// let valor2 = 9;
// resultado = valor1 + valor2;
// resultado2 = valor1 - valor2;
// console.log(`a soma do ${valor1} e  ${valor2} é igual a  ${resultado}.`);
// console.log(`a subtração do ${valor1} e  ${valor2} é igual a  ${resultado2}.`);
//  idade = prompt('Qual a sua idade?');
// if(idade >=18){
//     console.log('Você é maior de idade.')
// } else{
//     console.log('Você é ainda um pequeno gafanhoto.')
// }

// let numero = prompt('Escolha um número inteiro.')
// if(numero >0){
//     console.log('O valor é positivo.')
// } else if ( numero < 0){
//     console.log('O valor é negativo.')
// }else{
//     console.log('O valor é igual a zero.')
// }

// let contagem = 1;
// while(contagem <=10){
//     console.log(contagem);
//     contagem++
// }

// let nota = prompt('Qual foi a sua nota?');
// result = nota >= 7? 'Aprovado' : 'Reprovado'
// console.log(result)

// let num11 = parseInt(Math.random()); 
// let num12 = parseInt(Math.random() * 10 + 1); 
// let num13 = parseInt(Math.random() * 1000 + 1); 
// console.log(num11, num12, num13);









// ATIVIDADE-------------------------------------------
// // pode ser usado contador<=10
// let contador = 1;
// while(contador <11){
//     console.log(contador);
//     contador++;
// }

// let contado = 10;
// while(contado>=0){
//     console.log(contado);
//     contado--;
// }

// let contagem = prompt('Insira um número para a contagem reegressiva')
// while(contagem >=0){
//     console.log(contagem);
//     contagem--;
// }

// let numMax = prompt('Insira um número máximo para a contagem progressiva');
// let inicio = 0;
// while(inicio <= numMax){
//     console.log(inicio);
//     inicio++;
// }


// ATIVIDADE-------------------------------
// if (chute == numeroSecreto ) {
//     console.log('Isso aí, você descobriu o número secreto' + numeroSecreto)
// // TEMPLATE STRING (forma de concatenar strings e variáveis, usa crase e insere as variaveis dentro de ${}). ao invés dele, para concatenar também pode ser utilizado as string dentro do '' e usa o + fora para adicionar a variável.
//     alert(`Parabéns, você acertou ${numeroSecreto}`);
// } else {
//     alert('Você errou')
//     if ( chute < numeroSecreto){
//         alert(`O número secreto é maior que ${chute}`);
//     } else{
//         alert(`O número secreto é menor que ${chute}`)
//     }
// }
// let respDia = prompt('Qual é o dia da semana?');
// if (respDia == 'Sábado'){
//     alert('Bom fim de samana.');
// } else if(respDia=='Domingo'){
//     alert('Bom fim de semana');
// } else{
//     alert('Boa Semana');
// }
// let numDig = prompt('Digite um número positivo ou negativo');
// if(numDig >0){
//     alert('O número digitado é positivo.');
// } else{
//     alert('Seu número é negativo');
// }
// let pontuacao = 114;
// if(pontuacao >=100){
//     console.log('Parabéns, você venceu');
// } else{
//     console.log('Puxa, tente novamente para ganhar.');
// }
// let saldoConta = 502;
// alert(`O saldo da sua conta é de ${saldoConta} reais.`);

// let nomeUsuario = prompt('Qual o seu nome?');
// alert('Boas vindas' + nomeUsuario);
// let nome = 'Lua';
// let idade = prompt('Informe a sua idade');

// let numeroDeVendas = 1000;
// let mensagemDeErro = 'Erro, preencha todos os campos.'
// alert(mensagemDeErro)
// let nomee = prompt('Informe o seu nome:')

// if( idade >= 18) {
//     alert('Pode tirar a habilitação.')
// }


// ANOTAÇÕES ----------------------------


 // use /* e feche com */ apara fazer comentários em múltipolas linhas. 
 // Pro javascript o ; é usado para sinalizar que o comando foi finalizado. 
 // O ALERT serve para exibir uma mensagem na tela do usuário em forma de um pequeno pop-up.
 // O LET é usado para armazenar, declarar as vaariáveis.
 // PROMPT é usado para apresentar uma caixa de diálogo que permite que o usuário insira um valor.
 //  Uso de condicionar para que determinados comando só ocorram caso uma condição seja alcançada. 
 // console.log testar e visualizar coisas, imprime a mensagem do interior em um lugar secreto, e não na tela, mas sim quando voc~e aperta em inspecionr e na parte console. 
 // O '' é utilizado para texto, enquanto quando é apresentado um número não usa nada.
 //  Dentro de um alert, se quiser ser apresentada uma variável, usa-se o nome da variável sem as aspas. = é um operador de atribuição, 
 // enquanto == é um oporador de comparação de igualdade. 


