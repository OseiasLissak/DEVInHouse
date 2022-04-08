function calcular(){
    
    numero1 = parseInt(document.getElementById('num1').value);
    operacao = document.getElementById('operacao').value;
    numero2 = parseInt(document.getElementById('num2').value);

    console.log(typeof(numero1))
    console.log(numero1)

    console.log(typeof(operacao))
    console.log((operacao))

    console.log(typeof(numero2))
    console.log(numero2)
  
    
    switch(operacao){
        case '+':
        function soma(){
            const resultado = createElement('p');
                resultado.textContent (numero1 + numero2);
                resultado.style.color = 'black'
                document.body.appendChild('p')
                
        }
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