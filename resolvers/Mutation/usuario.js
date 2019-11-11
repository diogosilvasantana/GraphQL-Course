const { usuarios, proximoId } = require('../../data/db')

function indiceUsuario(filtro){
  if (!filtro) return -1
  const { id, email } = filtro
  if (id) {
    return usuarios
      .findIndex(u => u.id === id)
  } else if (email){
    return usuarios
      .findIndex(u => u.email === email)
  }
  return -1
}

module.exports = {

  // NOVO USUÁRIO
  novoUsuario(_, {dados}) {

    //VALIDAÇÃO E-MAIL EXISTENTE
    const emailExistente = usuarios
      .some(e => e.email === dados.email)

    if (emailExistente) {
      throw new Error('Email já cadastrado')
    }

    // ADICIONANDO NOVO USUÁRIO
    const novo = {
      id: proximoId(),
      ...dados,
      perfil_id: 1,
      status: 'ATIVO'
    }

    usuarios.push(novo)
    return novo
  },

  // EXCLUIR USUÁRIO
  excluirUsuario(_, { filtro }) {
    const i = indiceUsuario(filtro)

    if (i < 0) return null

    const excluidos = usuarios.splice(i, 1)
    return excluidos ? excluidos[0] : null
  },

  // ALTERAR USUÁRIO
  alterarUsuario(_, { filtro, dados }){
    const i = indiceUsuario(filtro)

    if (i < 0) return null

    usuarios[i].nome = dados.nome
    usuarios[i].email = dados.email
    if (dados.idade) {
      usuarios[i].idade = dados.idade
    }

    return usuarios[i]

    // const usuario = {
    //   ...usuarios[i],
    //   ...dados
    // }

    // usuarios.splice(i, 1, usuario)
    // return usuario
  }
}