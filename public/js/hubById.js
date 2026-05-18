window.onload = function () {
    verificarPerfil();
    botao();
}

function verificarPerfil() {
    var sessaoID = sessionStorage.ID_USUARIO;
    var genero = sessionStorage.GENERO_USUARIO;
    var idade = sessionStorage.IDADE_USUARIO;

    if ( sessaoID, genero == undefined ||
        sessaoID, idade == undefined
    ) {

        document.getElementById("popupPerfil")
            .style.display = "flex";
    } else {
        document.getElementById("popupPerfil")
            .style.display = "none";
    }
}

function salvarPerfil() {
    var genero = select_genero.value;
    var idade = input_idade.value;
    var id = sessionStorage.ID_USUARIO;

    fetch("/usuarios/completarPerfil", {

        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            generoServer: genero,
            idadeServer: idade,
            idUsuarioServer: id
        })
    })

    .then(function () {

        sessionStorage.GENERO_USUARIO = genero;
        sessionStorage.IDADE_USUARIO = idade;

        document.getElementById("popupPerfil")
            .style.display = "none";
    })

    .catch(function (erro) {

        console.log(erro);
    });
}



function botao() {
    document.getElementById('botaoAdicionar').style.display = 'block';
};

function exibir() {
    document.getElementById('botaoAdicionar').style.display = 'none';
    document.getElementById('areaPostagem').style.display = 'flex';
}

     function publicar() {
       document.getElementById('mensagem_post').innerHTML = "Post publicado com sucesso!";

       setTimeout(function() {
        document.getElementById('mensagem_post').innerHTML = "";
        }, 1500);

    document.getElementById('areaPostagem').style.display = 'none';
    document.getElementById('botaoAdicionar').style.display = 'block';

    var titulo = inputTitulo.value;
    var descricao = inputDescricao.value;
    var id = sessionStorage.ID_USUARIO;

     fetch("/postagens/publicar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            tituloServer: titulo,
            descricaoServer: descricao,
            fkUsuarioServer: id
        })
    })

    .then(function (resposta) {
        console.log("Post publicado.");
        window.location.reload();
        listarPosts();
    })

    .catch(function (erro) {
        console.log("Erro ao publicar:", erro);
    });
}

