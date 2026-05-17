var express = require("express");
var router = express.Router();
var postagemController = require("../controllers/postagemController");


router.get("/listar", function (req, res) {
    postagemController.listar(req, res);
});

router.get("/emAlta", function (req, res) {
    postagemController.emAlta(req, res);
});

router.post("/curtir", function (req, res) {
    postagemController.curtir(req, res);
});

router.post("/publicar", function (req, res) {
    postagemController.publicar(req, res);
});

router.get("/listarMeusPosts/:idUsuario", function (req, res) {
    postagemController.listarMeusPosts(req, res);
});

module.exports = router;