/**************************************************************
//for normal
/**************************************************************
const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

for(let i = 0; i < nomes.length; i = i + 1 ) {
    console.log('[for]', nomes[i],i);
}

/**************************************************************
//forEach
/***************************************************************
const nomes1 = ['Whinds', 'Freeway', 'Teste', 'Maria'];

nomes.forEach(function(nome, i) {
    console.log('[forEach]', nome, i);
})

/****************************************************************
//map
/***************************************************************
const nomes2 = ['Whinds', 'Freeway', 'Teste', 'Maria'];

nomes.map(function(nome, i) {
    console.log('[map]', nome, i);
})

*/
/*****************************************************************
//FILTER
/*******************************************************************

const listaPessoas = [
    {nome: 'Luis Fernando', email: 'luis@silva', nota: 120},
    {nome: 'Carla', email: 'carla@silva', nota: 90},
    {nome: 'Carolline', email: 'carol@silva', nota: 115},
    {nome: 'Fernanda', email: 'fefe@silva', nota: 82},
    {nome: 'Manuela', email: 'manu@silva', nota: 99},
    {nome: 'Debora', email: 'nina@silva', nota: 100},
];

const pessoasFiltradas = listaPessoas.filter((pessoa) => pessoa.nota >= 90);
console.log(pessoasFiltradas);


//Remover elementos duplicados ***********************************
const arrayNumber = [6, 8, 19, 37, 52, 10, 39, 17, 52, 19, 6]

const numberSemRepetidos = arrayNumber.filter((numero, index, arr) => arr.indexOf(numero) === index);
console.log(numberSemRepetidos);

*/

/************************************************************* 
//FIND - retorna o valor do primeiro elemento encontrado
/*************************************************************
 
const listaPessoas = [
    {nome: 'Luis Fernando', email: 'luis@silva', nota: 120},
    {nome: 'Carla', email: 'carla@silva', nota: 90},
    {nome: 'Carolline', email: 'carol@silva', nota: 115},
    {nome: 'Fernanda', email: 'fefe@silva', nota: 82},
    {nome: 'Manuela', email: 'manu@silva', nota: 99},
    {nome: 'Debora', email: 'nina@silva', nota: 100},
];

const foundPessoa = listaPessoas.find(p => p.nome === 'Carla');
console.log(foundPessoa);
*/

/************************************************************** 
//SOME - verifica se pelo menos um item atende a condição
/*******************************************************************

//Neste caso, verificamos se algum numero do array é um numero primo
function isPrimo(value){
    for(let i = 2;i < value;i++){
        if(value % i === 0){
            return false;
        }
    }
    return value > 1;
}

const arrayNumber = [6, 8, 12, 17, 42]

console.log(arrayNumber.some(isPrimo));
*/
/*
//Verifica se alguma pessoa da lista, tem a nota maior que 200, por exemplo
//Verifica se alguma pessoa da lista, tem Habilitação, por exemplo
const listaPessoas = [
    {id: 1, nome: 'Luis Fernando', email: 'luis@silva', nota: 120, habilitacao: true},
    {id: 2, nome: 'Carla', email: 'carla@silva', nota: 90, habilitacao: false},
    {id: 3, nome: 'Carolline', email: 'carol@silva', nota: 115, habilitacao: true},
    {id: 4, nome: 'Fernanda', email: 'fefe@silva', nota: 82, habilitacao: false},
    {id: 5, nome: 'Manuela', email: 'manu@silva', nota: 99, habilitacao: false},
    {id: 6, nome: 'Debora', email: 'nina@silva', nota: 100, habilitacao: true},
];

console.log(listaPessoas.some(pessoa => pessoa.nota > 200));
console.log(listaPessoas.some(pessoa => pessoa.habilitacao));
*/
/********************************************************************************** 
//MAP - Altera os valores de um Array
/*********************************************************************************
const arrayNumber = [6, 8, 12, 17, 42]

const valoresDobrados = arrayNumber.map(function(numero){
    return numero * 2;
})

console.log(valoresDobrados);

//Outra forma ******************************************************

const arrayNumber = [6, 8, 19, 37, 52]

function dobrarValores(numero){
    return numero * 2;
}

const valoresDobrados = arrayNumber.map(dobrarValores);
console.log(valoresDobrados);


//Outra forma, mais moderna  ******************************************

const arrayNumber = [6, 18, 22, 57, 92]

const valoresDobrados = arrayNumber.map(numero => numero * 2);

console.log(valoresDobrados);


//EXEMPLO **********************************************************

const tempFahrnheit = [6, 18, 22, 57, 92, 120]

const tempCelsius = tempFahrnheit.map(temp => Math.round((temp - 32) * 5/9 ));

console.log(tempCelsius);
*/
/***************************************************************************************
//REDUCE 
/***************************************************************************************
const listaPessoas = [
    {id: 1, nome: 'Luis Fernando', email: 'luis@silva', nota: 120, habilitacao: true, pedidos: 10},
    {id: 2, nome: 'Carla', email: 'carla@silva', nota: 90, habilitacao: false, pedidos: 16},
    {id: 3, nome: 'Carolline', email: 'carol@silva', nota: 115, habilitacao: true, pedidos: 2},
    {id: 4, nome: 'Fernanda', email: 'fefe@silva', nota: 82, habilitacao: false, pedidos: 9},
    {id: 5, nome: 'Manuela', email: 'manu@silva', nota: 99, habilitacao: false, pedidos: 20},
    {id: 6, nome: 'Debora', email: 'nina@silva', nota: 100, habilitacao: true, pedidos: 15},
];
//vamos somar a quantidade total de pedidos 

const totalPedidos = listaPessoas.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual.pedidos, 0);// 0 = valor inicial
console.log(totalPedidos);
*/

/**************************************************************************************** 
EVERY - retorna um booleano
*****************************************************************************************/
//Verificar se todos os elementos atendem a condição - neste caso, se os numeros são maiores que 5
/*
const arrayNumber = [6, 18, 22, 57, 92]

console.log(arrayNumber.every(numero => numero > 5));

//Verificar se todas as pessoas da lista são maiores de idade
const listaPessoas = [
    {id: 1, nome: 'Luis Fernando', email: 'luis@silva', nota: 120, habilitacao: true, pedidos: 10, idade: 37},
    {id: 2, nome: 'Carla', email: 'carla@silva', nota: 90, habilitacao: false, pedidos: 16, idade: 35},
    {id: 3, nome: 'Carolline', email: 'carol@silva', nota: 115, habilitacao: true, pedidos: 2, idade: 14},
    {id: 4, nome: 'Fernanda', email: 'fefe@silva', nota: 82, habilitacao: false, pedidos: 9, idade: 8},
    {id: 5, nome: 'Manuela', email: 'manu@silva', nota: 99, habilitacao: false, pedidos: 20, idade: 4},
    {id: 6, nome: 'Debora', email: 'nina@silva', nota: 100, habilitacao: true, pedidos: 15, idade: 34},
];

console.log(listaPessoas.every(p => p.idade >= 18));

//filtrar quais são as pessoas menores de idade
const menores = listaPessoas.filter(pessoa => pessoa.idade < 18);
console.log(menores);
*/

/*******************************************************************************************
INCLUDES - Saber se um array ou objeto, possui determinado elemento
********************************************************************************************/
/*Verificar se o array tem o numero 2, neste caso o array foi escrito direto na console, 
poderia ter utilizado uma variavel tambem.*/
/*
console.log([1, 2, 3].includes(2));

const pessoas = ['Luis', 'Joao', 'Maria', 'Nanci']
console.log(pessoas.includes('Luis'));
*/
/*
//EXEMPLO com objeto
const listaPessoas = [
    {id: 1, nome: 'Luis Fernando', email: 'luis@silva', nota: 120, habilitacao: true, pedidos: 10, idade: 37},
    {id: 2, nome: 'Carla', email: 'carla@silva', nota: 90, habilitacao: false, pedidos: 16, idade: 35},
    {id: 3, nome: 'Carolline', email: 'carol@silva', nota: 115, habilitacao: true, pedidos: 2, idade: 14},
    {id: 4, nome: 'Fernanda', email: 'fefe@silva', nota: 82, habilitacao: false, pedidos: 9, idade: 8},
    {id: 5, nome: 'Manuela', email: 'manu@silva', nota: 99, habilitacao: false, pedidos: 20, idade: 4},
    {id: 6, nome: 'Debora', email: 'nina@silva', nota: 100, habilitacao: true, pedidos: 15, idade: 34},
];

const filtrarPessoas = listaPessoas.filter(pessoa => pessoa.nome.includes('Lu'));
console.log(filtrarPessoas);
*/
/*************************************************************************************
 * EXEMPLO API
 *************************************************************************************/
/*
async function getPeople(){
    const response = await fetch('https://randomuser.me/api/?results=5');

    return response.json();
}
getPeople().then(data => console.log(data));
*/

//EXEMPLO - Filtrando só as mulheres *******************************************
/*
async function getPeople(){
    const response = await fetch('https://randomuser.me/api/?results=5');

    return response.json();
}

getPeople().then(data => {
    const pessoas = data.results;
 
    console.log(pessoas);

    const mulheres = pessoas.filter(pessoa => pessoa.gender === 'female');
    console.log(mulheres);
});
*/

/*
//EXEMPLO - Coletar infos e preencher nosso array
async function getPeople(){
    const response = await fetch('https://randomuser.me/api/?results=5');

    return response.json();
}

const arrayPessoas = [];//Declarei fora da função para usar a variavel carregada fora da função tambem.

getPeople().then(data => {
    const result = data.results;
   // const arrayPessoas = [];

    for (let p of result){
        arrayPessoas.push({
            'Nome': `${ p.name.first } ${ p.name.last }`,
            'Sexo': p.gender,
            'Idade': p.dob.age
        });
    }
    //console.log(arrayPessoas);//coloquei para fora da função
});
console.log(arrayPessoas);
*/

/*
//EXEMPLO - Coletar infos e preencher nosso array apenas com maiores de 30 anos de idade
async function getPeople(){
    const response = await fetch('https://randomuser.me/api/?results=5');

    return response.json();
}

const arrayPessoas = [];//Declarei fora da função para usar a variavel carregada fora da função tambem.
//A variavel fora estava dando erro,apresentava antes de receber o retorno da API
getPeople().then(data => {
    const result = data.results.filter(p => p.dob.age >= 30);
   // const arrayPessoas = [];
    for (let p of result){
        arrayPessoas.push({
            'Nome': `${ p.name.first } ${ p.name.last }`,
            'Sexo': p.gender,
            'Idade': p.dob.age
        });
    }
    console.log(arrayPessoas);
    console.log(arrayPessoas.filter((p) => p.Idade >= 40));
});
*/



















