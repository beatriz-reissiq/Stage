const usuarioModel = require("../models/usuarioModel");

function listar(req, res) {
  usuarioModel
    .listar()
    .then(function (resultadoListar) {
      console.log(`Resultados encontrados: ${resultadoListar.length}`);

      res.status(200).send(resultadoListar); 
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro);
    });
}

function autenticar(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    return res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    return res.status(400).send("Sua senha está indefinida!");
  }

  usuarioModel
    .autenticar(email, senha)
    .then(function (resultadoAutenticar) {
      console.log(`Resultados encontrados: ${resultadoAutenticar.length}`);

      if (resultadoAutenticar.length == 1) {
        res.json(resultadoAutenticar[0]); // retorna o usuário
      } else if (resultadoAutenticar.length == 0) {
        res.status(403).send("Email e/ou senha inválido(s)");
      } else {
        res.status(403).send("Mais de um usuário com o mesmo login!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro);
    });
}

function cadastrar(req, res) {
  var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;
  var vocacao = req.body.vocacaoServer;

  if (nome == undefined) {
    return res.status(400).send("Seu nome está undefined!");
  } else if (email == undefined) {
    return res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    return res.status(400).send("Sua senha está undefined!");
  }

  usuarioModel
    .cadastrar(nome, email, senha, vocacao)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro);
    });
}

function completarPerfil(req, res) {
  var genero = req.body.generoServer;
  var dataNascimento = req.body.dataServer;
  var id = req.body.idUsuarioServer;

  usuarioModel
    .completarPerfil(genero, dataNascimento, id)

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
  autenticar,
  cadastrar,
  completarPerfil,
};
