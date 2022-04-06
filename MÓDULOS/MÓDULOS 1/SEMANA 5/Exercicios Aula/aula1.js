/* 
let idade = 25;

console.log(mensagem);


if ( idade >= 18 ) {

     var mensagem = 'Entrada autorizada';
}

console.log( mensagem ); */


{ //ESCOPO GOLBAL
    {
        let umavar = "uma var";
        console.log(umavar);
    }


    {
        let umavar = "outra var";
        console.log(umavar);
    }
}

// VARIAVÉS EXTERNAS PODE SER VISUALIZADAS POR ESCOPOS INTERNOS
// VARIASVEIS INTERNAS, ESCOPO EXTERNO DA FALHA


