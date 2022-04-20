const dados = [
    {
        nome: 'Roger Medeiros',
        sexo: 'M',
        salario: 3250,        
    },

    {
        nome: 'Carolina Silva',
        sexo: 'F',
        salario: 1200,
    },

    {
        nome: 'Cristina Avila',
        sexo: 'F',
        salario: 8100,        
    },

    {
        nome: 'Gustavo Hoffman',
        sexo: 'M',
        salario: 5200.35,
    },

    {
        nome: 'Eva Trindade',
        sexo: 'F',
        salario: 2501,
    },

    {
        nome: 'Andre Mathias',
        sexo: 'M',
        salario: 1750,
    },

    {
        nome: 'Joice Castro da Silva',
        sexo: 'F',
        salario: 3350.25,
    },
];

/* Imprima no console a quantidade de pessoas Total. */
console.log(`A quantidade total de pessoas na lista é ${dados.length}`);
console.log('A quantidade total de pessoas na lista é ' + dados.length)



/* Imprima no console a quantidade de pessoas do sexo Feminino. */
let resultado = dados.filter(buscador => buscador.sexo === 'F');
console.log(`A quantidade de pessoas do sexo Feminino é ${resultado.length}`);
console.log('A quantidade de pessoas do sexo feminino é ' + resultado.length)


/* Imprima no console a soma do salário de todas as pessoas. */
let salarioTotal = dados.reduce((acumulador, proximo) => acumulador + proximo.salario, 0);
console.log(`A soma de todos os salários é R$${salarioTotal.toFixed(2)}`);


/* Imprima no console a soma do salario de todos as pessoas do sexo Masculino */
let totalSalarioM = dados.filter(buscador => buscador.sexo === 'M')
.reduce((acumulador, proximo) => acumulador + proximo.salario, 0);

console.log(`A soma de todos os salários das pessoas de sexo Masculino é R$${totalSalarioM.toFixed(2)}`);



/* Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso. */
let existe = dados.some(elemento => elemento.salario > 7000);

if(existe) {
    console.log("Verdadeiro");
}else{
    console.log("Falso");
}


/* Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'. */
let indicePessoaBuscada = dados.findIndex(elemento => elemento.nome === 'Eva Trindade');

if(indicePessoaBuscada != -1){
    console.log(`Encontrou a Eva! A Eva tá na posição ${indicePessoaBuscada} do array.`);
}else{
    console.log(`Não encontrou nenhuma Eva Trindade! O retorno foi ${indicePessoaBuscada}`);
}



/* Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva". */
let pessoasComSilva = dados.filter(elemento => elemento.nome.indexOf("Silva") >= 0)
console.log(pessoasComSilva);



/* Imprima os nomes utilizando o MAP. */
pessoasComSilva.map(elemento => console.log(elemento.nome));







