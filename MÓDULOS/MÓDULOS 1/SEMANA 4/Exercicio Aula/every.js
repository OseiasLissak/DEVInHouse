const array = [{ nome: 'teste' }, { nome: 'new' }];

const inclui = array.every((item) => item.nome.includes('e'));

console.log(inclui);

/// TRUE ou FALSE