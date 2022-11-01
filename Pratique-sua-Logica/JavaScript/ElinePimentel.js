// Resolução 1

const agua = 358.00;
const luz = 245.00;
const telefone =  98.00;
const internet =  150.00;
const aluguel =   1.850;
const ingles = 350.00;
const faculdade = 390.00;


function contasDoMes() {
   return agua + luz + telefone + internet + aluguel + ingles + faculdade;
}
console.log(contasDoMes());


//Resolução 2


//1. Lógica de Programação
let nota1LP = 6.5 
let nota2LP = 7.0 
let nota3LP = 5.5
let nota4LP = 7.5
let nota5LP = 0

// 2. Programação Orientada a Objetos:
let nota1POO = 5.0
let nota2POO = 4.5
let nota3POO = 7.0
let nota4POO = 8.5
let nota5POO = 0

//3. Projeto I: 
let nota1PI = 7.5 
let nota2PI = 8.5
let nota3PI = 7.4
let nota4PI = 6.9
let nota5PI = 0

//4. Inglês Instrumental: 
let nota1II = 9.5
let nota2II = 4.5
let nota3II = 7.5
let nota4II = 8.0
let nota5II = 0

// 5. Empreendedorismo: 
let nota1E = 8.0
let nota2E = 9.5
let nota3E = 7.0
let nota4E = 6.0
let nota5E = 0


function media1(){
   return (nota1LP + nota2LP + nota3LP)/3;
}
console.log('A média em LP foi' + ' ' + media1());

function ultimaNotaLP(){
   return 10.0 - media1() ;
}
console.log('Precisará de' + ' ' + ultimaNotaLP() + ' para ser aprovado')

////////////////////////

function media2(){
   return (nota1POO + nota3POO + nota4POO)/3;
}
console.log('A média em POO foi' + ' ' + media2());

function ultimaNotaPOO(){
   return 10.0 - media2() ;
}
console.log('Precisará de' + ' ' + ultimaNotaPOO() + ' para ser aprovado')

////////////////////////////////////////

function media3(){
   return (nota1PI + nota2PI + nota3PI)/3;
}
console.log('A média em PI foi' + ' ' + media3());

function ultimaNotaPI(){
   return 10.0 - media3() ;
}
console.log('Precisará de' + ' ' + ultimaNotaPI() + ' para ser aprovado')

/////////////////////

function media4(){
   return (nota1II + nota3II + nota4II)/3;
}
console.log('A média em II foi' + ' ' + media4());

function ultimaNotaII(){
   return 10.0 - media4() ;
}
console.log('Ele foi aprovado')

////////////////////////////

function media5(){
   return (nota1E + nota2E + nota3E)/3;
}
console.log('A média em E foi' + ' ' + media5());

function ultimaNotaE(){
   return 10.0 - media5() ;
}
console.log('Ele foi aprovado')