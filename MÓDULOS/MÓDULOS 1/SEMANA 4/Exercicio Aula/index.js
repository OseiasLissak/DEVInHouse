//IF, ELSE IF

var chuva = true;

if (chuva) { 
    console.log('Leva o guarda-chuva');
} else {

}


//TERNARIO

var idade = 19;

idade >= 18 ? console.log('maior de idade') : console.log('menor de idade');



// FOR

//for array = [4, 3, 4, 8];

var array = [4, 3, 4, 8]; //4
for (i = 0; i < array.length; i++) {
  console.log('posição: ', i);
  console.log('valor array: ', array[i]);
}


//forEach
var pessoas = [{ nome: 'teste' }, { nome: 'teste2' }]; //4

pessoas.forEach(function (pessoa) {
  console.log(pessoa.nome);
});

//While
var contador = 0

while(contador <= 2) {
    console.log('contador', contador);
    contador++;
}


//Do ....While

var pessoas = [{ nome: 'teste' }, { nome: 'teste2' }]; //4

pessoas.forEach(function (pessoa) {
  console.log(pessoa.nome);
});

