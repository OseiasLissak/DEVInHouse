function calcular(numero1, operacao, numero2){
    
    numero1 = document.getElementById("primeiro-num");
    operacao = document.getElementById("tipo-operacao");
    numero2 = document.getElementById("segundo-num");
    
    console.log(operacao)
    
    switch(operacao){
        case '+':
        resultado = numero1 + numero2;
        document.createElement('p')
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