/**
 * @typedef {Object} Project
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string[]} tags
 * @property {string} type
 */

/** @type {Project[]} */
const projects = [
  {
    id: 1,
    title: 'Sistema de inventario',
    description: 'Aplicación web académica para registrar, consultar, actualizar y eliminar productos, conservando la información en LocalStorage.',
    tags: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
    type: 'Aplicación web'
  },
  {
    id: 2,
    title: 'Ranking de videojuegos',
    description: 'Aplicación de consola para registrar jugadores y puntuaciones, consultar posiciones y administrar un ranking.',
    tags: ['Java', 'POO', 'Persistencia'],
    type: 'Proyecto académico'
  },
  {
    id: 3,
    title: 'Sistema de seguimiento financiero',
    description: 'Proyecto orientado a organizar ingresos, gastos y usuarios aplicando programación orientada a objetos y trabajo con Git.',
    tags: ['Java', 'POO', 'Git', 'GitHub'],
    type: 'Proyecto académico'
  }
]

export default projects