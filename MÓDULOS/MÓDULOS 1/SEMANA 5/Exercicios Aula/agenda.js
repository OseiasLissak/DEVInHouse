/* KKKK */

class Contato {
    #id;
    #nome;
    #telefone;
  
    constructor(valorNome, valorTelefone) {
      this.#id = Math.floor(Math.random() * 1000);
      this.setaNome = valorNome;
      this.#telefone = valorTelefone;
    }
  
    get id() {
      return `CONTATO-${this.#id}`;
    }
  
    set setaNome(novoNome) {
      if (novoNome.length < 3) {
        this.#nome = "desconhecido";
      } else {
        this.#nome = novoNome;
      }
    }
  
    get nome() {
      return this.#nome;
    }
  }
  
  const contato1 = new Contato("Mika", "47 99999-9");

  console.log(contato1.setaNome())