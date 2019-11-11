const { perfis, proximoId } = require('../../data/db')

function indicePerfil(filtro) {
  if (!filtro) return -1
  const { id, nome } = filtro
  if (id) {
    return perfis
      .findIndex(p => p.id === id)
  } else if (nome) {
    return perfis
      .findIndex(p => p.nome === nome)
  }
  return -1
}

module.exports = {

  // NOVO USUÁRIO
  novoPerfil(_, { dados }) {

    //VALIDAÇÃO E-MAIL EXISTENTE
    const nomeExistente = perfis
      .some(e => e.nome === dados.nome)

    if (nomeExistente) {
      throw new Error('Perfil já cadastrado')
    }

    // ADICIONANDO NOVO PERFIL
    const novo = {
      id: proximoId(),
      ...dados
    }

    perfis.push(novo)
    return novo
  },

  // EXCLUIR PERFIL
  excluirPerfil(_, { filtro }) {
    const i = indicePerfil(filtro)

    if (i < 0) return null

    const excluidos = perfis.splice(i, 1)
    return excluidos ? excluidos[0] : null
  },

  // ALTERAR PERFIL
  alterarPerfil(_, { filtro, dados }) {
    const i = indicePerfil(filtro)

    if (i < 0) return null

    perfis[i].nome = dados.nome

    return perfis[i]
  }
}