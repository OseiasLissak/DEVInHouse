const array = [{ nome: 'teste' }, { nome: 'novo' }];

const inclui = array.some((item) => item.nome.includes('t'));

console.log(inclui);