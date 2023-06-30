const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
  ];

  const resultado = (array) => {
    const programador = array.filter((programadores)=>{
            return programadores.idade > 20 && programadores.idade <= 30 && programadores.profissao === 'Programador'
    })
    console.log(programador)
    const jornalista = array.filter((jornalistas)=>{
        return jornalistas.idade > 30 && jornalistas.profissao === 'Jornalista'
    })
    console.log(jornalista)
    const jovens = array.filter((elemento)=>{
        return elemento.idade < 29
    })
    console.log(jovens)
  }

  resultado(pessoas)