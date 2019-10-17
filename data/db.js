const usuarios = [{
  id: 1,
  nome: 'João Silva',
  email: 'jsilva@gmail.com',
  idade: 29,
  perfil_id: 1,
  status: 'ATIVO'
}, {
  id: 2,
  nome: 'Diogo Santana',
  email: 'diogosilvaoficial@gmail.com',
  idade: 34,
  perfil_id: 2,
  status: 'INATIVO'
}, {
  id: 3,
  nome: 'Joyce Alves',
  email: 'joyce.alves@proartproducoes.com.br',
  idade: 34,
  perfil_id: 1,
  status: 'BLOQUEADO'
}]

const perfis = [
  { id: 1, nome: 'Comum' },
  { id: 2, nome: 'Administrador' }
]

module.exports = { usuarios, perfis }