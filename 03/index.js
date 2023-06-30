const palavras = ["arroz", "vodka", "carne", "cerveja", "macarrão"]

const bebidas = (lista) =>{
    const resultado = lista.some((verificados)=>{
       return verificados === "vodka" || verificados === "cerveja"
    })
    if(resultado){
        console.log('revise sua lista, joão. possui bebida com venda proibida!')
    }else{
        console.log('tudo certo, vamos as compras!')
    }
    
}

bebidas(palavras)
