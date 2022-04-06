const usuarios = [
    {
      nome: 'Thais',
      idade: 27,
    },
    {
      nome: 'Teste',
      idade: 16,
    },
  ];
  
  const maiores = usuarios.find((usuario) => {
    console.log(usuario.idade);
    return usuario.idade <= 16;
  });
  
  console.log(maiores);

/// FIND com string
  const array = ['Ssaaa', 'bbb'];

const maior = array.find((str) => {
  return str.toUpperCase() === 'SSAAA';
});

console.log(maior);

///
const array = ['Ssaaa', 'bbb'];

const maior = array.find((str) => {
  return str.endsWith('a');
});

console.log(maior);