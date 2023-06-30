const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const resultados = cidades.filter((elemento)=>{
   return elemento.length <= 8
})

console.log(resultados.join(', '))