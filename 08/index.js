const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const novoArray = frutas.map((elemento, indice)=>{
    return `${indice} ${elemento.slice(0,1).toUpperCase()}${elemento.slice(1).toLowerCase()}`
})

console.log(novoArray)