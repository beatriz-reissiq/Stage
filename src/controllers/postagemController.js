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

function emAlta(req, res) {
    postagemModel.emAlta()
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

function publicar(req, res) {
    var titulo = req.body.tituloServer;
    var descricao = req.body.descricaoServer;
    var idUsuario = req.body.idUsuarioServer;


    postagemModel.publicar(titulo, descricao, idUsuario)
        .then(function (resultado) {
            res.json(resultado);
        })

        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro);
        });
}


function listarMeusPosts(req, res) {
    var idUsuario = req.params.idUsuario;
    postagemModel.listarMeusPosts(idUsuario)

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
    emAlta,
    curtir,
    publicar,
    listarMeusPosts
}