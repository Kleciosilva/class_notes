/** Herança e cadeia de protótipos (prototype chain) */

const pai = { attr1: 'A' } 

// Herdando do objeto pai o atributo attr1
const filho = { __proto__: pai, attr2: 'B' }

console.log(filho.attr1, filho.attr2)
