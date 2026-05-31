var postagemModel = require("../models/postagemModel");
console.log(postagemModel);

function publicar(req, res) {
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
    var idUsuario = req.params.idUsuario;
    postagemModel.listar(idUsuario)

        .then(function (resultado) {
            res.json(resultado);
        })

        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function curtir(req, res){
    var fkUsuario = req.body.fkUsuarioServer;
    var fkPostagem = req.body.fkPostagemServer;
    postagemModel.curtir(fkUsuario, fkPostagem)
        .then(function(resultado){
            res.json(resultado);
        })
        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro);
        });
}

function verificarCurtida(req, res){
    var fkUsuario = req.body.fkUsuarioServer;
    var fkPostagem = req.body.fkPostagemServer;
    postagemModel.verificarCurtida(fkUsuario, fkPostagem)
        .then(function(resultado){
            if(resultado.length > 0){
                res.json({
                    curtiu: true
                });

            } else {
                res.json({
                    curtiu: false
                });
            }
        })

        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro);
        });
}

function tirarCurtir(req, res){
    var fkUsuario = req.body.fkUsuarioServer;
    var fkPostagem = req.body.fkPostagemServer;
    postagemModel.tirarCurtir(fkUsuario, fkPostagem)
        .then(function(resultado){
            res.json(resultado);
        })
        .catch(function(erro){
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

function excluir(req,res){
    var idPostagem = req.params.idPostagem;
    postagemModel.excluir(idPostagem)

    .then(function(resultado){
        res.json(resultado);
    })

    .catch(function(erro){
        console.log(erro);
        res.status(500).json(erro);
    });
}

function listarAdmin(req, res) {
    postagemModel.listarAdmin()

    .then(function(resultado){
        res.json(resultado);
    })

    .catch(function(erro){
        console.log(erro);
        res.status(500).json(erro);
    });

}

module.exports = {
    listar,
    listarAdmin,
    listarMeusPosts,
    curtir,
    verificarCurtida,
    tirarCurtir,
    publicar,
    excluir
}