/** Herança e cadeia de protótipos (prototype chain) */

const pai = { attr2: 'A' }
const filho = { __proto__: pai, attr1: 123 }

console.log(
  filho.attr1,
  filho.attr2
  )
