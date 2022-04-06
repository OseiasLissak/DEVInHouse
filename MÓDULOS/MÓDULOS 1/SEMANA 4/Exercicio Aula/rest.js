/* function teste (param, ...outros){
    console.log(param)
    console.log(outros)
}

teste('asa'; 'asas', '1a0', ) */


/* function soma(...outros) {
    let result = 0;
    outros.forEach((valor) => {
      result += valor;
    });
    console.log(result);
  }
  
  soma(10, 1, 2, 3); */

  const numeros = [10, 20, 30, 40, 50];

const [n1, ...outros] = numeros;
console.log(n1, outros);