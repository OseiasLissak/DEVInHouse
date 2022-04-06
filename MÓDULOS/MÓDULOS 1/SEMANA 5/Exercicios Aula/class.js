class Veiculo {
    tipo;
    cor;
    ano = 2012;
    modelo;
    fabricante;
    combustivel = "alcool";
    ativo = true;
  
    constructor(tipo, cor, modelo, ano) {
        this.tipo = tipo;
        this.cor = cor;
        this.modelo = modelo;
        this.ano = ano;
        Object.freeze(this) // bloqueia alterações de propriedades e valores de um objeto

    }
  
    buzinar() {
      console.log("Bi");
    }
  }
  
  let tipo_carro = "carro!"

  const umVeiculo = new Veiculo(tipo_carro, "bege", "hatch", 1980);
  
 console.log(umVeiculo)
  




