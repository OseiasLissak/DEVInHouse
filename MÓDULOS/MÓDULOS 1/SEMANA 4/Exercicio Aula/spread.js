const pessoa = { nome: 'Thais', idade: 10 };

const novaPessoa = {
  idade: 27,
};
const adiciona = () => {
  return {
    ...pessoa,
    ...novaPessoa,
  };
};

console.log(adiciona());
const pessoas = [{ nome: 'Thais', idade: 10 }];

const novaPessoa = [
  {
    nome: 'asas',
    idade: 27,
  },  
];

const adiciona = () => {
  return [...pessoas, ...novaPessoa];
};

console.log(adiciona());
console.log(adiciona());