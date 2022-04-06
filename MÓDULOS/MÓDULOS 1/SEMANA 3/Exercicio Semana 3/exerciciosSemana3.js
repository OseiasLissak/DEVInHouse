/* [M1S03] - Ex 1 - Alerte o Usuário
Utilizando JavaScript, emita um alerta para o usuário com alguma informação importante. */

function executaAlert(){
    alert('ISSO É UMA ALERT!!!');
};

/* [M1S03] - Ex 2 - Faça com que o usuário confirme antes de seguir
Utilizando JavaScript, peça a confirmação do usuário ao clicar em algum botão, perguntando se ele deseja realmente realizar aquela ação (você pode utilizar a página criada nos exercícios da semana 1, ou criar uma nova).*/
function executaConfirm(){
    var valor = confirm ('Deseja ser redirecionado?');
    if(valor == true){
        window.location="https://www.google.com.br";
    }
    else{
        alert('Você continuará na Página inicial')
    }
    console.log(valor);
};

/* [M1S03] - Ex 3 - Peça o nome do usuário e exiba na tela
Faça com que o navegador do usuário pergunte o nome dele(a). Utilizando o método alert, exiba o nome inserido pelo usuário. */

function executaPrompt(){
    var nome= prompt('Digite seu nome:');
    alert('Seja Bem Vindo ' + nome + ' !');
};

/* [M1S03] - Ex 4 - Pergunte ao usuário e exiba no console
Pergunte ao usuário: nome (prompt), idade (prompt) e se gosta de praticar algum esporte (confirm). Crie 3 variáveis para guardar as respostas do usuário: uma deve receber um valor textual (string), outra deve receber um valor numérico (number), e outra um valor de verdadeiro ou falso (boolean). Faça com que esses 3 valores sejam exibidos no console do navegador.*/
function executaQuestionario (){

    var nome1 = prompt('Digite seu nome:');
    
    var idade = prompt('Qual sua idade?');
    var idadeConvertidoToNumber = parseInt(idade)

    var esporte = confirm('Prática esportes?');


    console.log(nome1); 
    console.log(idadeConvertidoToNumber); 
    console.log(esporte); 

    console.log(typeof nome1); 
    console.log(typeof idadeConvertidoToNumber); 
    console.log(typeof esporte); 
};

/*[M1S03] - Ex 5 - Pergunte nome e sobrenome e exiba na tela
Faça 2 prompts ao usuário: no primeiro, pergunte o seu sobrenome. No segundo, pergunte o seu nome. Em seguida, exiba na tela um alert contendo o nome completo do usuário, na ordem correta (ou seja: Nome Sobrenome).*/

function executaNomeSobrenome (){
    var sobrenome = prompt('Qual seu Sobrenome?');
    var nomeDoSobrenome = prompt('Qual seu nome?');
    alert('Seu nome Completo é: ' + nomeDoSobrenome +' '+ sobrenome + ' Prazer em conhece-lo!')

    console.log(sobrenome);
    console.log(nomeDoSobrenome);
};

/* [M1S03] - Ex 6 - Pergunte o último sobrenome e exiba em letras maiúsculas, junto do tamanho
Pergunte ao usuário seu último sobrenome e em seguida exiba na tela um alert contendo o texto “Olá, X. Seu sobrenome contém y letras”, onde X é o sobrenome em letras maiúsculas, e y é a quantidade de letras desse sobrenome.*/

function executaMaisculoNmroLetras(){
    var ultimoSobrenome = prompt('Qual seu último Sobrenome?');
    var nroLertras = ultimoSobrenome.length;

    alert('Olá '+ ultimoSobrenome.toUpperCase() + '! Seu nome contém: ' + nroLertras + ' letras.' )

    console.log(ultimoSobrenome.toUpperCase());
    console.log(ultimoSobrenome.length);
};

/* [M1S03] - Ex 7 - Pergunte o ano atual e o ano de nascimento, exiba na tela a idade
Faça 2 prompts ao usuário: no primeiro, pergunte o ano de nascimento. No segundo, pergunte o ano atual. Em seguida, exiba na tela um alert contendo o texto “Sua idade é x ou y”, onde x é a idade do usuário caso ele já tenha feito aniversário neste ano, e y é a idade caso ele ainda não tenha aniversariado no ano corrente.*/

function executaAnoNascimento(){
    var anoNascimento = prompt('Qual seu ano de nascimento? ');
    var anoAtual = prompt('Qual ano atual? ');

    var anoNascimentoConvertido = parseInt(anoNascimento);
    var anoAtualConvertido = parseInt(anoAtual);

    alert('Sua idade é: ' + (anoAtualConvertido-anoNascimentoConvertido) + ' ou ' + (anoAtualConvertido-anoNascimentoConvertido-1) + ' anos.');
    
    console.log(typeof anoNascimentoConvertido);
    console.log(typeof anoAtualConvertido);
};

/*[M1S03] - Ex 8 - Construa uma calculadora
Faça 3 prompts ao usuário: no primeiro, pergunte qual o tipo de cálculo ele deseja fazer (“+”, “-”, “*” ou “/”). No segundo, pergunte o primeiro valor que deseja calcular. No terceiro, o segundo valor que deseja calcular. Em seguida, realize o cálculo e exiba na tela um alert contendo o texto “O resultado do seu cálculo é: X”, onde X é o resultado final do cálculo solicitado pelo usuário.*/

function executaCalculadora(){
    var operacao = prompt('Qual o tipo de cálculo ele deseja fazer? (“+”, “-”, “*” ou “/”)');
    var primeiroValor = parseInt(prompt('Primeiro valor que deseja calcular:'));
    var segundoValor = parseInt(prompt('Segundo valor que deseja calcular:'));

        if(operacao ==="+"){
            alert('O resultado do seu cálculo é:  ' + (primeiroValor + segundoValor));
        }
        if(operacao === "-"){
            alert('O resultado do seu cálculo é:  ' + (primeiroValor - segundoValor));
        }
        if(operacao === "/"){
            alert('O resultado do seu cálculo é:  ' + (primeiroValor / segundoValor));
        }
        if(operacao === "*"){
            alert('O resultado do seu cálculo é:  ' + (primeiroValor * segundoValor));
        }

    console.log(typeof operacao);
    console.log(typeof primeiroValor);
    console.log(typeof segundoValor);
   
    console.log(operacao);
    console.log(primeiroValor);
    console.log(segundoValor);
};

/* [M1S03] - Ex 9 - Alerte as horas para o usuário
Construa um script que alerta o horário no momento de acesso, no formato “23:59” (HH:mm). Use o objeto Date do JavaScript. */

function executaHoras(){
    var horaAtual = new Date();
    alert('Agora são: ' + horaAtual.getHours() + ":" + horaAtual.getMinutes());

    console.log(typeof horaAtual.getHours())
    console.log(typeof horaAtual.getMinutes())
};

/* [M1S03] - Ex 10 - Construa uma “calculadora” de P.A
Ao entrar na página, seu script deve realizar 2 prompts ao usuário: um solicitando um “valor inicial”, e outro um valor para a “raíz”. Após o usuário inserir esses valores, o seu script deve calcular os 10 primeiros valores da sequência e exibir na tela. Relembrando: P.A. (Progressão Aritmética) é uma sequência numérica em que cada termo, a partir do segundo, é igual à soma do termo anterior com a raiz. Exemplo: Valor inicial = 1; raiz = 3; P.A. = 1, 4, 7, 10, 13, 16, 19, 22, 25, 28.
 */


