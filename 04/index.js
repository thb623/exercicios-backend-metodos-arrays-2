const numeros = [0, 122, 4, 6, 9, 8, 44]

const numero = (array)=>{
    const resultado = array.every((elemento)=>{
        return elemento % 2 === 0
    })
    if(resultado){
        console.log('array válido')
    }else{
        console.log('array inválido')
    }
}

numero(numeros)