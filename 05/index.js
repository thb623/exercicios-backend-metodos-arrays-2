const usuários = [
    {
      nome: "André",
      idade: 29,
      habilitado: true,
    },
    {
      nome: "Marcos",
      idade: 70,
      habilitado: true,
    },
    {
      nome: "Ana",
      idade: 35,
      habilitado: true,
    },
    {
      nome: "Vinícius",
      idade: 44,
      habilitado: true,
    },
    {
      nome: "Carlos",
      idade: 17,
      habilitado: true,
    },
    {
      nome: "Maria",
      idade: 19,
      habilitado: true,
    },
  ];

  const verificarIdade = (arrayUsuarios) =>{
   const idadeUsuarios = arrayUsuarios.filter((objeto)=> {
     return objeto.idade > 18 && objeto.idade < 65
    })
    const ehHabilitado = idadeUsuarios.every((habilitacao)=>{
      return habilitacao.habilitado === true
    })
    if(ehHabilitado){
      console.log('todos passaram no teste')
    }else{
      console.log('todos precisam estar habilitados')
    }
  }


verificarIdade(usuários)