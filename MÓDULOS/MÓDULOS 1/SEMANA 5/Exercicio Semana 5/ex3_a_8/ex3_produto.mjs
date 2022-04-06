/* [M1S05] - Ex 3 - Criando classe
Crie uma classe para um Produto, com as seguintes propriedades: nome, preco, emEstoque, quantidade.
Todas essas propriedades precisam ser recebidas no construtor da classe. */

export class Produtos{
    nome;
    preco;
    emEstoque;
    quantidade;

    constructor (nome, preco, emEstoque, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
}



export const novoProduto1 = new Produtos ("sabonete", 1.99, true, 2);
export const novoProduto2 = new Produtos ("shampoo", 5.99, true, 3);
export const novoProduto3 = new Produtos ("pasta dental", 6.50, true, 3);
export const novoProduto4 = new Produtos ("cotonete", 3.20, true, 4);
export const novoProduto5 = new Produtos ("soro fisiológico", 2.50, true, 6);
