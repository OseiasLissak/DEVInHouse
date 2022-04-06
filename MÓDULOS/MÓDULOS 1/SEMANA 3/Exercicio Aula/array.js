var meuArray = [12, 2323, 232323];
console.log(meuArray);

meuArray.push('novo');
console.log(meuArray);

meuArray.pop();
console.log(meuArray);

meuArray.shift();
console.log(meuArray);

meuArray.unshift('novo');
console.log(meuArray);

var novoArray = meuArray.slice(2, 10);
console.log(meuArray);
console.log(novoArray);

meuArray.splice(1, 1);
console.log(meuArray);

console.log(meuArray.join(', '));