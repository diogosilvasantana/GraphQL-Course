const { usuarios, perfis } = require('../data/db')

module.exports = {
  ola() {
    return 'Bom dia!'
  },
  horaAtual() {
    return new Date
  },
  usuarioLogado(obj) {
    return {
      id: 1,
      nome: 'Diogo Silva',
      idade: 34,
      salario_real: 30.000,
      vip: true,
      email: 'diogosilvaoficial@gmail.com'
    }
  },
  produtoEmDestaque() {
    return {
      nome: 'Computador',
      preco: 35000,
      desconto: 0.35
    }
  },
  numerosMegaSena() {
    const cresente = (a, b) => a - b
    return Array(6).fill(0).map(n => parseInt(Math.random() * 60 + 1)).sort(cresente)
  },
  usuarios() {
    return usuarios
  },
  usuario(_, { id }) {
    const selecionados = usuarios
      .filter(u => u.id === id)
    return selecionados ? selecionados[0] : null
  },
  perfis() {
    return perfis
  },
  perfil(_, { id }) {
    const selecionado = perfis
      .filter(p => p.id === id)
    return selecionado ? selecionado[0] : null
  }
}