//estruturas condicionais
//estrutura desisão

//usando o IF
var jogador1 = 0;
var jogador2 = 8;
var placar;

if(jogador1 >0){
    console.log('jogador1 marcou ponto');
} else if (jogador2 > 0){
    console.log('jogador 2 marcou ponto');
} else {
    console.log('ninguem marcou ponto');
}

//aninhando if's
//if ternario
jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores são validos'): console.log('os jogadores nao sao validos');

if(jogador1 > 0 && jogador1 ==0){
    console.log('o jogador 1 marcou ponto');
    placar = jogador1 > jogador2;
}
//usando o else if
else if(jogador2 >0 && jogador1 == 0){
    console.log('o jogador 2 marcou ponto');
    placar = jogador2 > jogador1;
}
// usando o else
    else{
        console.log('ninguem mercou ponto');
}

var vaxco = -0;
var corinthians = 0;

var placar;

//usando switch case
switch (placar) {
case placar: vaxco > corinthians;
 console.log('vaxco ganhou')
    break;
case placar = corinthians > vaxco:
    console.log('corinthians ganhou')
    break
     console.log('ninguem ganha,que pena...')
     break
  
        break;

    default:
        break;
}

//estrutura de repetição
let array = ['valor1','valor2','valor3','valor4']
let Gois = {propriedade1: 'valor1',propriedade2: 'valor2'};
//for - executa ate que seja false
for (let i = 0; i < array.length; i++) {
    console.log(i);
}
//for/in - executa repetição a partir de uma propriedade
//com array
for (i in array){
    console.log(i);
} 
// com object 
for(i in Gois){
    console.log(i);
}
//while - executa enquanto for verdadeira
var a = 0;
while(a < 10 ){
    a++;
    console.log(a);
} 
//do - executa ate que seja falsa
console.log('========================================')
var b = 0;
do {
    b++
    console.log(b);
} while (b < 10);

        
    













