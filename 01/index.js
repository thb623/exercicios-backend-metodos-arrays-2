const livros = ['Guerra e Paz', 
'A Montanha Mágica', 
'Cem Anos de Solidão', 
'Dom Quixote', 
'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const verificarLivro = (nomeLivros) =>{
    const livro = nomeLivros.some((nomelivro) => {
            return nomelivro === nomeDoLivro
    })
    if(livro){
        console.log(`O livro está na posição ${livros.indexOf(nomeDoLivro) + 1}.`)
    }else{
        console.log('Livro digitado não foi encontrado.')
    }
}

verificarLivro(livros)