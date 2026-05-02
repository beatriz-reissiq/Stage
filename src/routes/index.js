const express = require("express");
const router = express.Router();

const usuarioRouter = require("./usuarios");

router.use("/usuarios", usuarioRouter);

module.exports = router;    