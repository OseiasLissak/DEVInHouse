function calcular(numero1, operacao, numero2){
    
    numero1 = document.querySelector.value("#primeiro-num");
    operacao = document.querySelector.value("#tipo-operacao");
    numero2 = document.querySelector.value("#segundo-num");

    console.log(numero1)

    console.log(typeof(numero1.value))
    console.log(typeof(operacao.value))
    console.log(typeof(numero2.value))
    
    console.log(operacao)
    
    switch(operacao){
        case '+':   
        resultado = numero1.value + numero2.value;
        alert (resultado);

        break;
    
        case '-':
        resultado = numero1 - numero2;
        console.log(resultado);
        alert (resultado);
        break;
    
        case '*':
        resultado = numero1 * numero2;
        console.log(resultado);
        alert (resultado);
        break;
    
        case '/':
        resultado = numero1 / numero2;
        console.log(resultado);
        alert (resultado);
        break;
    
        default: 
        console.log("Operação Invalida");
        alert ("Operação Invalida");
    }
    }