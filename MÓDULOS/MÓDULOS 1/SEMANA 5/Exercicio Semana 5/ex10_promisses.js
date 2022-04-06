let valor = true

function sleep (valor){

    return new Promise ((resolve, reject)=> {
    if(valor === true){
        setTimeout((()=> console.log('A Promise foi' + valor)), 3000);
    } else {
        setTimeout((()=> console.log('A Promise não foi resolvido')),3000)
    };
    })
}