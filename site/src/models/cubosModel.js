var database = require("../database/config");

function cadastrarCubo(cubo, id) {

    var instrucaoSql = `INSERT INTO cubo VALUES (DEFAULT, '${cubo}', '${id}');`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarCubo
}
