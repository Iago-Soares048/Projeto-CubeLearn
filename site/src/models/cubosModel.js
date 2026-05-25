var database = require("../database/config");

function cadastrarCubo(cubo, id) {

    var instrucaoSql = `INSERT INTO cubo VALUES (DEFAULT, '${cubo}', '${id}');`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function puxarCubos(id) {
    console.log("ACESSEI O CUBOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", id)
    var instrucaoSql = `
        select Usuarios.nome as nome, cubo.modelo as modelo, cubo.idCubo as idCubo from Usuarios
        join cubo on cubo.idUsuario = Usuarios.idUsuario
        where Usuarios.idUsuario = '${id}';

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarCubo,
    puxarCubos
}
