/* cons usuarios = [
    {

    }
]


const maiores = 
usuarios.filter((usuarios) => 
usuarios.idade >= 18); */

const usuarios = ['teste', 'ana', 'maria'];

const maiores = usuarios.filter((str) => {
  console.log(str);
  return str.startsWith('a');
});

console.log(maiores);


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
  
  const maiores = usuarios.filter((usuario) => {
    console.log(usuario.idade);
    return usuario.idade >= 18;
  });
  
  console.log(maiores);