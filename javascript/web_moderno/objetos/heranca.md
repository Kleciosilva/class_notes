# Herança e cadeia de protótipos (prototype chain)  

Referência extra: 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain  

- Object.prototype  
Protótipo Global. Herdado nativamente por um objeto.    
Aqui é possível adicionar um atributo global ao Object.  

- `__proto__`  

- Shadowing (sombreamento)  
Sobrescrita de atributo herdado de um objeto.  

- `super` é usado para referênciar um atributo herdado   
super.status()

- Object.setPrototypeOf(meuObjeto, meuObjetoPai)
Função para definir um protótipo ao objeto.  
