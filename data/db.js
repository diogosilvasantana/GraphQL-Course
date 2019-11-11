let id = 1
function proximoId(){
  return id++
}

const usuarios = [{
  id: proximoId(),
  nome: 'João Silva',
  email: 'jsilva@gmail.com',
  idade: 29,
  perfil_id: 1,
  status: 'ATIVO'
}, {
  id: proximoId(),
  nome: 'Diogo Santana',
  email: 'diogosilvaoficial@gmail.com',
  idade: 34,
  perfil_id: 2,
  status: 'INATIVO'
}, {
  id: proximoId(),
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

module.exports = { 
  usuarios, 
  perfis, 
  proximoId 
}