// Primitivos (imutáveis) - string , number, boolean, undefined,
// null (bigint, symbol)
// Referência ( mutável) - Array, object, function

let a = [1,2,3]
a.push(4)
console.log(a);
a.pop();
console.log(a);

const pessoa = {
    nome: 'Diana',
    sobrenome: ' Regina'
    
}
pessoa.nome = 'João'
console.log(pessoa)