const endereços = [
  { cep: '00111222', rua: "Rua dos Artistas" },
  { cep: '00111333', rua: "Rua Augusta" },
  { cep: '00222444', rua: "Avenida Paralela" },
  { cep: '11222333', rua: "Rua Carlos Gomes" },
];

const endereco = ((arrayEnderecos, cep)=>{
    const resultado = arrayEnderecos.find((procurarCep) => {
            return procurarCep.cep === cep
    })
    console.log(resultado.rua)
    })


endereco(endereços,'00222444')

//vscode estava dando esse erro no objeto cep Octal literals are not allowed. Use the syntax '0o111222', apenas mudei os ceps para string