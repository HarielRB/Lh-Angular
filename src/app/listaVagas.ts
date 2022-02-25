export interface Vaga{
    id: Number;
    nome: String;
    descricao: String;
    salario: Number;
}

export const vagas = [
    {
        id: 1001,
        nome: "Desenvolvedor front-end",
        descricao: "Trabalhar com Angular",
        salario: 1500
    },
    {
        id: 1002,
        nome: "Desenvolvedor back-end",
        descricao: "Trabalhar com Python",
        salario: 2500
    },
    {
        id: 1003,
        nome: "Desenvolvedor fullstack",
        descricao: "Trabalhar com JavaSpring e SQL",
        salario: 4500
    }
]