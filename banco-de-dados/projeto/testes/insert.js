const db = require('../config/db')

// const novoPerfil = {
//   nome: 'visiante',
//   rotulo: 'Visitante'
// }

// db('perfis').insert(novoPerfil)
//   .then(res => console.log(res))
//   .catch(error => console.log(error.sqlMessage))
//   .finally(() => db.destroy())

const perfilSU = {
  nome: 'root' + Math.random(),
  rotulo: 'Super Usuário'
}

// INSERT INTO PERFILS (nome, rotulo) VALUES ('...', '...')
db.insert(perfilSU).into('perfis')
  .then(res => res[0])
  .then(id => `O código gerado foi ${id}`)
  .then(string => console.log(string))
  .catch(error => console.log(error.sqlMessage))
  .finally(() => db.destroy())