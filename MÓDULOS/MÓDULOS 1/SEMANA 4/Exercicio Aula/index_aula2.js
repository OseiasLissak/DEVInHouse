/* const helloWorld3 = (name) => {
 const year = new Date().getFullYear()
 console.log('Bem vindo', year)
 return 'Bem vindo' + year
}

const helloWorld3 = (name) => {
    const year = new Date().getFullYear()
   
    return `Bem vindo(a) ${name} a ${year}`  // jeito atual de contatenar
   }
   
   console.log(helloWorld3('douglas'))


   //var armazena valores
//pode armazenar, strings, 

var nome = "oseias"; //strings
var age = 32 // number
var maiorIdade = true;

var aluno = {    //var objeto
  nome: 'oseias',
  age: 12,
}

var number = [1, 2, 3, 4, 5];  // var array



console.log(nome);


console.log(outronome);

var outronome = "ramone";

for(var contador; contador <=10; contador++){
  
}

console.log(contador);
 */

// FUNCAO MAP
/* 
const notas = [8, 7, 3, 9]
console.log(notas.map(
    (nota) => {
        console.log('a minha nota é ' + nota)
        return
    })) */
    const usuarios = [
        {
            nome: 'douglas',
            sobrenome: 'costa'
        },
        {
            nome: 'rebeca',
            sobrenome: 'silva'
        },
        {
            nome: 'Max',
            sobrenome: 'bairros'
        }
    ];
    
    const novosNomes = usuarios.map((usuario) => {
        const ano = new Date().getFullYear()
        const nickname = `${usuario.nome}_${usuario.sobrenome}_${ano}`
    
        return { ...usuario, nickname }
    }
    )
    
    console.log(novosNomes)