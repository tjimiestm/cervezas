const cervezas = require('./cervezas.json')
const uniqueRandomArray = require('unique-random-array')
const prueba = function () {
  return 'Esta es una prueba'
}
module.exports = {
  todas: cervezas,
  alazar: uniqueRandomArray(cervezas)
}
