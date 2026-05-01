const express = require("express");
const router = express.Router();

const usuarioRouter = require("./usuarios");

// só rota de usuário
router.use("/usuarios", usuarioRouter);

module.exports = router;    