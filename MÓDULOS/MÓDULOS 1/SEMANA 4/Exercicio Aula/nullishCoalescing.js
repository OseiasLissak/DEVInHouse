const pessoa = {
    nome: 'Thais',
    apelido: null,
  };
  
  console.log(pessoa.apelido ?? pessoa.nome);
  console.log(pessoa.apelido || pessoa.nome);