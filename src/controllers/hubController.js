var postagemModel = require("../models/postagemModel");

function listar(req, res) {

    postagemModel.listar()
        .then(function (resultado) {
            res.json(resultado);
        })

        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro);
        });
}


function curtir(req, res) {

    var idPost = req.body.idPost;
    postagemModel.curtir(idPost)
        .then(function (resultado) {
            res.json(resultado);
        })

        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro);
        });
}

module.exports = {

    listar,
    curtir
}