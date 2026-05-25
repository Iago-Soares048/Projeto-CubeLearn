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

function puxarCubos(req, res) {
    var id = req.body.idServer;

    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        cubosModel.puxarCubos(id)

            .then(
                function (resultadoCubos) {
                    console.log(`\nResultados encontrados: ${resultadoCubos.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoCubos)}`); // transforma JSON em String

                    if (resultadoCubos.length > 0) {

                        let dadosFormatados = resultadoCubos.map(registro => ({
                            usuario: registro.usuario,
                            modelo: registro.modelo,
                            idCubo: registro.idCubo,
                            
                        }));
                        res.json(dadosFormatados);

                        
                    }else {
                        let dadosFormatados = []  
                        res.json(dadosFormatados);
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao puxar os cubos! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

module.exports = {
    cadastrarCubo,
    puxarCubos

}