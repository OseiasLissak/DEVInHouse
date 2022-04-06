const pessoa = {
    nome: 'Thais',
    endereco: {
      rua: 'Ibiporã',
      bairro: 'Centro',
      tipo: null,
    },
  };
  console.log(pessoa.endereco?.tipo?.descricao);