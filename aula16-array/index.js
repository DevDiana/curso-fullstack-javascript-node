const alunos = 
 [
    'Diana',
    'Maria',
    'Eduarda'
];

alunos[0]='samantha';
alunos.push('Otavio'); //inclue
alunos.push('Luiza'); //inclue
alunos.unshift('Fábio') // adiciona no começo
alunos.shift()// remove do começo do array
const removido = alunos.pop();//remove o ultimo elemento do array
delete alunos[1]; // remove esse elemento
console.log(alunos)
console.log(removido)
console.log(alunos.slice(0,-1))

console.log(alunos[50]); //indice que não existe no array alunos
console.log(typeof alunos);
console.log(alunos instanceof Array);
