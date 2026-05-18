var postagemModel = require("../models/postagemModel");

function publicar(req, res) {

    console.log("ENTROU NO PUBLICAR");

   //var titulo = inputTitulo.value;
   //var descricao = inputDescricao.value;
   //var id = sessionStorage.ID_USUARIO;

    var titulo = req.body.tituloServer;
    var descricao = req.body.descricaoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    postagemModel.publicar(titulo, descricao, fkUsuario)

        .then(function(resultado) {

            res.json(resultado);
        })

        .catch(function(erro) {

            console.log(erro);

            res.status(500).json(erro);
        });
}

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



function listarMeusPosts(req, res) {
    var fkUsuario = req.params.fkUsuario;
    postagemModel.listarMeusPosts(fkUsuario)

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