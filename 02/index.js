const palavras = ["livr", "cane", "sol", "carr", "orel"]

const verificar = (array) =>{
    const resultado = array.filter((verificacao) => {
        return verificacao.length > 5

    })
    if(resultado.length > 0){
        console.log('tem palavras com mais de 5')
    }else{
    console.log('nao tem')
    }
}

verificar(palavras)