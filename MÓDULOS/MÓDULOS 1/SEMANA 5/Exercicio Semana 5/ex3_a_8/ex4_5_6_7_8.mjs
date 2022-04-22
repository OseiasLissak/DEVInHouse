
//IMPORT PRODUTOS CRIADOS EX.3
import { Produtos } from "./ex3_produto.mjs"
import { novoProduto1 } from "./ex3_produto.mjs"
import { novoProduto2 } from "./ex3_produto.mjs"
import { novoProduto3 } from "./ex3_produto.mjs"
import { novoProduto4 } from "./ex3_produto.mjs"
import { novoProduto5 } from "./ex3_produto.mjs"

// CLASS PEDIDO
class Pedido {
    numeroPedido;
    dataPedido = new Date().toLocaleString();
    estaPago = true;
    listaProdutos = [];
    nomeCliente;

    constructor (numeroPedido, nomeCliente){
        this.numeroPedido = numeroPedido;  
        this.nomeCliente = nomeCliente;
    } 
    // ADICIONA PRODUTOS NO PEDIDO
    adicionarPedido(produto){
        if(produto instanceof Produtos){
        this.listaProdutos.push (produto);     
        } 
    }   
    calcularTotal(){
        this.listaProdutos.forEach(total => {
        let valorTotal = 0 
        valorTotal += total.quantidade * total.preco;   
        });
        //PENDENTE  
        return valorTotal;
   
      
    }
}    

// PEDIDO 1 COM 3 PRODUTOS
const pedido1 = new Pedido(20220001, 'Oseias');
pedido1.adicionarPedido(novoProduto1);
pedido1.adicionarPedido(novoProduto2);
pedido1.adicionarPedido(novoProduto3);



pedido1.listaProdutos.forEach(produto1 => {
    console.log(`PEDIDO 1: Produto: ${produto1.nome} | Unitário: ${produto1.preco} | Qt: ${produto1.quantidade} | Total= ${produto1.preco * produto1.quantidade}`) 
});



      
    // PEDIDO 2 COM 2 PRODUTOS
    const pedido2 = new Pedido(20220002, 'Antonella');
    pedido2.adicionarPedido(novoProduto4);
    pedido2.adicionarPedido(novoProduto5);
    
    pedido2.listaProdutos.forEach(item => {
        console.log(`PEDIDO 2: Produto: ${item.nome} | Unitário: ${item.preco} | Qt: ${item.quantidade} | Total= ${item.preco * item.quantidade}`)});

    
    
    
   
    
