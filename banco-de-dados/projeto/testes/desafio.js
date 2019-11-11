const db = require('../config/db')

async function salvarUsuario(nome, email, senha) {
  let usuario = await db('usuarios')
    .where({ email }).first()

  if (!usuario){
    let [ id ] = await db('usuarios')
      .insert({ nome, email, senha })
    usuario = await db('usuarios')
      .where({ id }).first()
  } else {
    await db('usuarios')
      .where({ id: usuario.id })
      .update({ nome, email, senha })
    usuario = { ...usuario, nome, email, senha }
  }

  return usuario
}

async function salvarPerfil(nome, rotulo){
  let perfil = await db('perfis')
  .where({ nome }).first()

  if (!perfil){
    let [ id ] = await db('perfis')
      .insert({ nome, rotulo})
    perfil = await db('perfis')
      .where({ id }).first()
  } else {
    await db('perfis')
      .where({ id: perfil.id })
      .update({ nome, rotulo })
    perfil = { ...perfil, nome, rotulo}
  }

  return perfil
}

async function adicionarPerfis(usuario, ...perfis){
  // for (perfil of perfis){ ...}
}

async function executar(){
  const usuario = await salvarUsuario(
    'Ana Lucia',
    'ana.lucia@empresa.com.br',
    '123456'
  )
  const perfilA = await salvarPerfil('rh', 'Recursos Humanos')
  const perfilB = await salvarPerfil('fin', 'Financeiro')

  console.log(usuario)
  console.log(perfilA)
  console.log(perfilB)
}

executar()
  .catch(error => console.log(error))
  .finally(() => db.destroy())