/* [M1S04] - Ex 1 - Dado uma idade exibe a classificação dela

Utilizando estrutura condicional exiba (console.log) a descrição da classificação da idade (variável) da pessoa de acordo com os dados abaixo:

Jovens - Indivíduos de até 15 anos;
Adultos - Indivíduos com idade entre 16 até 64 anos;
Idosos - Indivíduos de 65 anos em diante. */

function executaIdade() {
    var idade = parseInt(prompt('Qual sua idade?'));

        console.log(idade);

        if (idade >= 64){
            alert('Você é IDOSO!');
        } else if (idade <= 18){ 
            alert('Você é JOVEM!')
        } else {
            alert('Você é ADULTO!')
        }

}

/* [M1S04] - Ex 2 - Realize as operações matemáticas básicas

Crie uma função que receba como parâmetro dois números e a operação a ser realizada;
Utilizando a estrutura condicional switch faça a validação e realize a operação desejada
(soma, subtração, divisão ou multiplicação) com os dois números passados por parâmetro 
e exiba o resultado utilizando console.log.
Caso seja passada uma operação diferente das 4 à cima deve exibir utilizando console.log que a operação não está disponível.
Chame essa função 5 vezes passando em cada uma uma operação como argumento e na ultima passando uma operação inválida. */

function executaSwicth(numero1, operacao, numero2){
    
numero1 = parseInt(prompt("Digite o primeiro número:"));
operacao = (prompt("Qual tipo de operação deseja fazer?"));
numero2 = parseInt(prompt("Digite o segundo o segundo número:"));

console.log(operacao)

switch(operacao){
    case '+':
    resultado = numero1 + numero2;
    console.log(resultado);
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


/* [M1S04] - Ex 3 - Numero é par
Dado um número verifique se ele é par, 
caso seja exibe a mensagem de que ele é par, 
caso não exibe a mensagem de que ele é impar. 
Para exibir a mensagem pode ser usado console.log

dica: operador ternário pode ser uma boa */

function executaPar(){
    
let numero = parseInt(prompt('Digite um número:'));
let ParOuImpar = numero % 2 === 0  ? alert (`O Número ${numero} é Par`): alert (`O Número ${numero} é Ímpar`);
};


/* [M1S04] - Ex 4 - Tabuada do 2

Utilizando estrutura de repetição realize a tabuada do número 2 e exibe ela no console.log da seguinte forma:
2 x 0 = 0
2 x 1 = 2
....
2 x 10 = 20

dica: de uma olhadinha no for. */

function executaTabuada2() {
    for( i =1; i <= 10 ; i++) {
        document.write("2 x "+ i +" = " + (2*i) + "<br />");
        console.log (`2 x ${i} =`, (2*i));
    };
};


/* [M1S04] - Ex 5 - Percorra um array exiba seus valores
Dado o array abaixo percorra ele e exiba o animal e sua raça utilizando console.log.
Dica: forEach pode ser uma boa */
function executaPercorraArray() {

var animais = [
    { animal: 'Cachorro', raca: 'Akita' },
    { animal: 'Cachorro', raca: 'Boxer' },
    { animal: 'Cachorro', raca: 'Dálmata' },
    { animal: 'Cachorro', raca: 'Pastor alemão' },
    { animal: 'Gato', raca: 'Persa' },
    { animal: 'Gato', raca: 'Sphynx' },
    { animal: 'Gato', raca: 'Siamês' },
    ]

    animais.forEach(especie => {                // elemento, index[0..1..], array   
        console.log(especie.animal, especie.raca);    
    });
}


/* [M1S04] - Ex 6 - Execute o código enquanto o valor seja verdadeiro

Cria uma variável impares que inicia com 0;
Crie uma variável contador que inicia com 0;
Utilizando a estrutura de repetição while executa o código enquanto a variável impares for menor que 10;
A variável contador deve ser incrementado dentro do while toda vez que ele for iterado;
A variável impares só deve ser incrementada dentro do while quando o contador for um número ímpar;
A cada iteração do while imprima o valor de contador e de impares usando console.log. */

function executaWhile() {
    
    /* 
    var impares = 0;
    var cont = 0;
    
    while (impares < 10) {
        cont++;
        if(cont % 2 != 0){
            impares++
        };
        console.log(`Contador: ${cont}`);
        console.log(`Impares: ${impares}`);
    }; */
    
 
let impares = 0;
let contador = 0;

while(impares < 10){
    contador ++;
    if (contador % 2 !== 0 ){
        impares ++;
    };
    console.log('IMPARES: ' +  contador);
    console.log('CONTADOR: ' +  contador);
}
 
/* let odd=0
let i = 0

while(odd <10) {
    i++
    i % 2 != 0 && odd++
    console.log(i + ':' + odd) 
} */


}


/* [M1S04] - Ex 7 - Converter temperatura de Fahrenheit para Celsius
Dado o array abaixo realize a conversão da temperatura de Fahrenheit para Celsius;
Utilizando console.log exiba o valor do array original e do novo array convertido
array: [ 0, 32, 45, 50, 75, 80, 99, 120 ];
formula: Math.round( ( elem - 32 ) * 5 / 9 );

Dica: eu daria uma olhada no .map */

function executaToCelsius() {
    const array= [ 0, 32, 45, 50, 75, 80, 99, 120 ];

    const celsius = array.map((grausCelsius) => Math.round(( grausCelsius - 32 ) * 5 / 9 ));

    console.log(array);
    console.log(celsius);
}

/* [M1S04] - Ex 8 - Manipulando arrays
Dado o array de cidades abaixo, filtre apenas as cidades com mais de 200000 habitantes;
Após o filtro ordene por ordem decrescente de acordo com a população (primeiro cidades mais populosas);
cidades: [
{ nome: 'Patos de Minas', populacao: 153585 },
{ nome: 'Lages', populacao: 157349 },
{ nome: 'Ibiúna', populacao: 79479 },
{ nome: 'Maringá', populacao: 403063 },
{ nome: 'Curitiba', populacao: 1963726 },
{ nome: 'Florianópolis', populacao: 508826 },
{ nome: 'Pato Branco', populacao: 84779 },
];

Dica: Dar uma olhada nos métodos filter e sort */


function executaMaiorPopulacao() {
           let cidades = [
            { nome: 'Patos de Minas', populacao: 153585 },
            { nome: 'Lages', populacao: 157349 },
            { nome: 'Ibiúna', populacao: 79479 },
            { nome: 'Maringá', populacao: 403063 },
            { nome: 'Curitiba', populacao: 1963726 },
            { nome: 'Florianópolis', populacao: 508826 },
            { nome: 'Pato Branco', populacao: 84779 },
            ];
            
            let maisPopulosas =  cidades
                .filter((habitantes) => habitantes.populacao > 200000)
                /* .map((habitantes) => habitantes.nome); */
            console.log `Cidades com mais de 200000 habitantes ${maisPopulosas}`;

            let newMaisPopulosas = [...maisPopulosas];
                    
           const populacaoDecrescente = newMaisPopulosas.sort((a,b) => b.populacao - a.populacao );
           console.log `Cidades com mais de 200000 habitantes ordem Descrescente ${populacaoDecrescente}`;  
}
                       


/* [M1S04] - Ex 9 - Verificar se array contem item
Dado o array de cidades abaixo verificar se o array contém pelo menos uma cidade com o nome Florianópolis.
Deve ser retornado true filtrando por 'Florianópolis' ou 'florianópolis'.
const cidades = [
{ nome: 'Patos de Minas', populacao: 153585 },
{ nome: 'Lages', populacao: 157349 },
{ nome: 'Ibiúna', populacao: 79479 },
{ nome: 'Maringá', populacao: 403063 },
{ nome: 'Curitiba', populacao: 1963726 },
{ nome: 'Florianópolis', populacao: 508826 },
{ nome: 'Pato Branco', populacao: 84779 },
];

Dica: Para resolver os problemas de maiúsculo e minúsculo de uma olhada em toLowerCase e toUpperCase */

function executaFilter() {
    const cidades = [
        { nome: 'Patos de Minas', populacao: 153585 },
        { nome: 'Lages', populacao: 157349 },
        { nome: 'Ibiúna', populacao: 79479 },
        { nome: 'Maringá', populacao: 403063 },
        { nome: 'Curitiba', populacao: 1963726 },
        { nome: 'Florianópolis', populacao: 508826 },
        { nome: 'Pato Branco', populacao: 84779 },
        ];

        const contemFloripa= cidades
            .filter ((floripa) => floripa.nome.toLocaleLowerCase() === 'florianópolis')
            .map((floripa) => floripa.nome); 
        console.log(contemFloripa)
        alert('No array contém: ' + (contemFloripa));
};