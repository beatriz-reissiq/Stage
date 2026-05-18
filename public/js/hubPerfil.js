window.onload = function () {
    verificarPerfil();
}

function verificarPerfil() {

    var genero = sessionStorage.GENERO_USUARIO;
    var idade = sessionStorage.IDADE_USUARIO;
    var vocacao = sessionStorage.VOCACAO_USUARIO;

    if (
        genero == undefined ||
        idade == undefined ||
        vocacao == undefined
    ) {

        document.getElementById("popupPerfil")
            .style.display = "flex";
    }
}

function salvarPerfil() {

    var genero = select_genero.value;
    var idade = input_idade.value;
    var idUsuario = sessionStorage.ID_USUARIO;

    fetch("/usuarios/completarPerfil", {

        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            generoServer: genero,
            idadeServer: idade,
            idUsuarioServer: idUsuario
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

