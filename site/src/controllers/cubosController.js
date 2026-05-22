var cubosModel = require("../models/cubosModel");

function cadastrarCubo(req, res) {

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var cubo = req.body.cuboServer;
    var id = req.body.idServer;

    // Faça as validações dos valores
    if (cubo == undefined) {
        res.status(400).send("Seu cubo está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Sua id está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        cubosModel.cadastrarCubo(cubo, id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar o cubo! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


function buscarMedidasEmTempoReal(req, res) {

    var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    cadastrarCubo,
    buscarMedidasEmTempoReal

}