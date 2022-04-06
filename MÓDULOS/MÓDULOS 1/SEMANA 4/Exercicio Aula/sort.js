/* 
const array = [1, 5, 3, 2];

const ordenado = array.sort((a, b) => b - a);

console.log(ordenado);





const array = [5, 4, 3, 2,];

const ordenado = array.sort();

console.log(ordenado)


// com String
const array = ['teste', 'aasa'];

const ordenado = array.sort();

console.log(ordenado);

//
const numbers= [6, 3, 4, 100, 33, 2]
const sorted = numbers.sort((a,b) => {
  if(a<b) return -1;
  if(a>b) return 1;
  return 0;
})
console.log(sorted) */

const numbers = [{ idade: 20 }, { idade: 50 }, { idade: 10 }];
const sorted = numbers.sort((a, b) => a.idade - b.idade);  // b -a decrescente
console.log(sorted);