// Crie um objeto que receba ao menos três propriedades sobre você.
const info = {
    namedBy: "Gramma",
    zoodiacSign: "Aquarius",
    profession: "Civil Engineer"
};

// Adicione uma nova propriedade sem alterar seu objeto inicial.
info.age = 29;


// Remova uma propriedade desse objeto.
delete info.zoodiacSign;


//Mostre no console todas as propriedades desse objeto.
console.log(info)


// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.

//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.

//Na propriedade amigos, adicione ao menos 4 itens.

const cadastro = [
    {
        nome:"Bernardo Tomás Kevin Cardoso",
        idade: 30,
        telefone: "98387-4420",
        amigos:["Daniela Aurora","Juan Kevin Cardoso","Henrique Murilo Farias","Lara Benedita Raquel Fogaça"]
    },
    {
        nome: "Mirella Regina Silva",
        idade: 18,
        telefone: "98579-2913",
        amigos:["Isabelle Isabela","Raimundo Manoel Araújo","Diogo Erick Gael Ramos","Alana Cecília Elaine"]
    },
    {
        nome: "Marlene Rosângela Emily Bernardes",
        idade: 75,
        telefone: "98389-1478",
        amigos:["Marcela Amanda Raimunda","Tiago José Murilo Bernardes","Eduardo Nathan Ramos","Nelson Heitor Lucca Peixoto"]
    },
    {
        nome: "Giovanna Evelyn de Paula",
        idade: 39,
        telefone: "98302-5062",
        amigos:["Flávia Fabiana Laís","Tiago Bernardo Geraldo de Paula", "Daiane Clara","Iago Kevin Peixoto"]
    },
    {
        nome: "Eduarda Josefa Isabel Araújo",
        idade: 47,
        telefone: "3855-2888",
        amigos:["Isabelle Isabela", "Raimundo Manoel Araújo","Ian Felipe Sérgio Santos","Cristiane Lara Juliana","Beatriz Eliane"]
    }
]

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[1]);
console.log(cadastro[2].amigos[2]);
console.log(cadastro[3].amigos[3]);
console.log(cadastro[4].amigos[4]);