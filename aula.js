/*console.log('Luis')
console.log('Curso Java Script')

let idade = 27;
console.log(idade);

let altura = 1.85;
console.log(altura);

let peso = 105;
let carro = 'ecoSport';
let time = 'corinthians';

console.log(peso, carro,time)

let ok = true;
console.log(ok)
*/

/*
let nome = 'Luis';
let idade = 37;
let aprovado = true;

let pessoa = {
    nome: 'Carla',
    idade: 37,
    aprovado: true,
    time: 'Corinthians',
    empresa: 'Scania'
};


console.log(pessoa);
/********************************************************************************
//Arrays
*********************************************************************************/
/*
let familia = [25,34,10,9,57]

console.log(familia)
console.log(familia.length)
*/


/*******************************************************************************
//FUNÇÕES  - Verbo + Substantivo
********************************************************************************/
/*
let corSite = 'azul';
function resetaCor(cor, tonalidade){
    corSite = cor + ' ' + tonalidade;
}



console.log(corSite);
resetaCor('verde', 'claro');
console.log(corSite);
*/

/*
//TIPOS DE FUNÇÕES
//Realizar tarefa sem retorno
function dizerNome(){
    console.log('Luis Fernando');
}

dizerNome();

//Retorna valor
function multiplicarPorDois(valor){
    return valor * 2;
}

console.log(multiplicarPorDois(5));

let resultado = multiplicarPorDois(5);

console.log(resultado);
*/

/***************************************************************************
//OPERADORES
//aritimeticos
//atribuição
//comparação
//logicos
//bitwise
******************************************************************************/
/*
//aritimeticos
// + , - , *, / , **
let salario = 100;
console.log(salario+salario);
console.log(salario-salario);
console.log(salario*salario);
console.log(salario/salario);
console.log(5**5);

// ++ , --
let idade = 18;
console.log(idade);
console.log(idade++);
console.log(++idade);

//atribuiçao
// = , += , -= 
let valorTeclado = 250;
valorTeclado += valorTeclado;
console.log(valorTeclado);

//operador de igualdade
//igualdade restrita
console.log(1 === 1); //3 iguais compara o numero e o tipo de variavel
console.log(1 == 1);  //2 iguais compara apenas o valor, nao compara o tipo

//operador ternario
//cliente mais que 100 pontos é premium se tiver menos que 100 pontos é comum
let pontos = 70;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

//Operadores logicos
// &&(AND) , ||(OR) , !(NOT)

let maiorIdade = false;
let possuiCarteiraTrabalho = true;
let podeTrabalhar = maiorIdade && possuiCarteiraTrabalho;
console.log(podeTrabalhar);



//Operadores não booleanos
//Falsy
//valores = undefined, null, 0 false, '', NaN - not a number

//Truthy
//valores diferentes do Falsy

let corPersolanizada = 'vermelho';
let corPadrao = 'azul';

let corPerfil = corPersolanizada || corPadrao;

console.log(corPerfil);

*/

/******************************************************************************
//EXERCICIO
*******************************************************************************/
/*
let a = 'vermelho';
let b = 'azul';

let c = a;

a = b;
b = c;

console.log(a);
console.log(b);
*/

/*******************************************************************************
//COMPARAÇÃO
********************************************************************************/
/*
//IF.. ELSE
//ex.: se a hora estiver entre 6:00 e 12:00 bom dia!
//se a hora estiver entre 12:01 e 18:00 boa tarde!
//caso contrario boa noite!

let hora = 15;

if(hora > 6 && hora <12){
    //codigo
    console.log('Bom dia!');
}
else if(hora > 12 && hora < 18){
    //codigo
    console.log('Boa tarde!');
}
else{
    //codigo
    console.log('Boa noite!');
}


/*******************************************************************************
//SWITCH CASE
********************************************************************************/
/*
let permissao; //comum, gerente, diretor
permissao = 'diretor';
switch(permissao){
    case 'comum':
        console.log('usuario comum');
        break;

    case 'gerente':
        console.log('usuario gerente');
        break;

    case 'diretor':
        console.log('usuario diretor');
        break;

    default:
        console.log('usuario nao reconhecido');
        break;
}

*/

/*******************************************************************************
//LAÇOS REPETIÇÃO
//1.FOR
//2.WHILE
//3.DO..WHILE
//4.FOR..IN
//5.FOR..OF
********************************************************************************/
/*

for(let i = 0; i < 5; i++){
    console.log('Estou aprendendo',i);
}

for(let i = 1; i <= 5; i++){
    if(i % 2 !== 0){
        console.log('Estou aprendendo',i);
    }
}


//WHILE *****************************************************************
let i = 5;
while(i >= 1){
    if(i % 2 !== 0){
        console.log('Estou aprendendo',i);
    }
    i--;
}


//DO .. WHILE ************************************************************
let i = 0;
do {
    console.log('Digitando...',i)
    i++;
} while(i<10)

//FOR..IN
const pessoa = {
    nome: 'Luis',
    idade: 37
};
//key-value
for(let key in pessoa){
    console.log(key,pessoa['nome']);
}


const cores = ['Vermelho','Azul','Verde'];

for (let indice in cores){
    console.log(indice,cores[indice]);
}


//FOR..OF ****************************************************************


const cores = ['Vermelho','Azul','Verde'];

for (let cor of cores){
    console.log(cor);
}

const nomes = ['Luis','Carla','Carol','Fernanda','Manuela'];

for(let nome of nomes){
    console.log(nome);
}

*/
/*
//EXERCICIO
//Resposta minha
let a = 50;
let b = 50;
let result = a - b;
if (result > 0){
    console.log(a);
}
else {
    console.log(b);
}
*/

/*
//Resposta do professor
let valorMaior = max(100,28);
console.log(valorMaior);
/*
function max(numero1, numero2){
    if(numero1 > numero2)
        return numero1;
    else return numero2;
}

//Agora utilizando o operador ternario para simplificar
function max(numero1, numero2){
        return numero1 > numero2 ? numero1 : numero2;
}
*/


/*
//Função FizzBuzz ********************************************************

//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//Divisivel por 3 e 5 => FizzBuzz
//Não divisivel por 3 e 5 => retorna o valor de entrada
//Caso a entrada não seja um numero => 'Não é um numero' 

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Não é um numero';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    return entrada;
}
*/
/*
//ARREDONDAMENTO ************************************************************
var arredondadoParaBaixo = Math.floor(3/2);
var arredondadoParaProximo = Math.round(3/2);
var arredondadoParaCima = Math.ceil(3/2);
*/
//Velocidade maxima de ate 70km/h
//A cada 5km/h acima do limite, ganha 1 ponto na carteira
//math.floor()
//caso os pontos sejam maior que 12, suspende a carteira
/*
//Resposta minha
let pontos = 0;
let excedido = 0;
let radar = verificarVelocidade(60);

console.log(radar);

function verificarVelocidade(velocidade){
    if (velocidade > 70)
        excedido = (velocidade - 70);
        pontos = Math.floor(excedido / 5);
        if (pontos > 12)
            return console.log('Carteira suspendida');
        return console.log('Voce receberá ', pontos,' pontos');
}
*/
/*
//Resposta do professor

verificarVelocidade(64);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('OK');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if (pontos >= 12)
            console.log('Carteira suspensa');
        else {
            console.log('Pontos', pontos)
        }
    }
}
*/

/*
//PAR ou IMPAR ************************************************************
exibirTipo(20);

function exibirTipo(limite){
    for (let i = 0; i <= limite; i++){
        if (i % 2 === 0)
            console.log(i,'PAR');
        else
            console.log(i, 'IMPAR');
    }
}
*/

/*
const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}

exibirPropriedades(filme);
function exibirPropriedades(obj){
    for(prop in obj){   //prop seria as propriedades
        if (typeof obj[prop] === 'string') //obj[prop] são os valores das propriedades
            console.log(prop, obj[prop])
    }
}
*/

/*

somar(10);

function somar(limite){
    let multCinco=0;
    let multTres=0;
    for(i=0;i <= limite;i++){
        if (i % 3 === 0)
            multTres = multTres + i;        
        if (i % 5 === 0)
            multCinco = multCinco + i;        
    }
    console.log(multCinco + multTres);
}
*/

//MEDIA ALUNO
//0-59=F
//60-69=D
//70-79=C
//80-89=B
//90-100=A
/*
const array = [70,70,80];

console.log(mediaAluno(array));

function mediaAluno(notas){
    let media = 0;
    let totalNotas = 0;
    for (nota in notas){
        media = notas[nota] + media;
        totalNotas = nota;
    }
    media = media / (notas.length);

    if (media > 90 && media <= 100)
        //console.log('Nota A') //só retornar a letra
        return 'A'
    if (media >= 80 && media <= 89)
        //console.log('Nota B')
        return 'B'
    if (media >= 70 && media <= 79)
        //console.log('Nota C')
        return 'C'
    if (media >= 60 && media <= 69)
        //console.log('Nota D')
        return 'D'
    if (media > 0 && media <= 59)
        //console.log('Nota F')
        return 'F'
}
*/
//OUTRA MANEIRA
/*
const array = [70,90,80];

console.log(mediaAluno(array));

function mediaAluno(notas){
    const media = calcularMedia(notas);
    
    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    if (media < 100) return 'A';
}

function calcularMedia(array){
    let soma = 0;
    for (let valor of array){
        soma += valor;
    }
    return soma/(array.length);
}

*/

/*
exibirAsteriscos(10);

function exibirAsteriscos(linhas){
    
    let padrao = '';
    for(let linha = 1; linha <= linhas; linha++){
        padrao += '*';
        console.log(padrao);
    }
    for(let linha = 1; linha <= linhas; linha++){
        let padrao = '';
        for(let i = 0; i < linha; i++){
            padrao += '*'; 
        }
        console.log(padrao);
    }
}
*/
/*

//NUMEROS PRIMOS
exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){     
        if(numeroPrimo(numero)) console.log(numero);
    }
}

function numeroPrimo(numero){
    for(let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor === 0){
            return false;
        }
    }
    return true;
}

*/
/*
let frutas= [string,string] = ['uva', 10];
console.log(frutas);
console.log('luis');
*/
































