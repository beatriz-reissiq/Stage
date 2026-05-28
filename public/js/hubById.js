window.onload = function () {
    verificarPerfil();
    botao();
}

function verificarPerfil() {
    var sessaoID = sessionStorage.ID_USUARIO;
    var genero = sessionStorage.GENERO_USUARIO;
    var idade = sessionStorage.IDADE_USUARIO;

    if ( sessaoID, genero == undefined ||
        sessaoID, idade == undefined ) {

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
    document.getElementById('areaPostagem').style.display = 'flex';
    document.getElementById('containerPostagem').style.display = 'flex';
}

function fechar() {
    document.getElementById('areaPostagem').style.display = 'none';
    document.getElementById('containerPostagem').style.display = 'none';
}

    function publicar() {
    var titulo = inputTitulo.value;
    var descricao = inputDescricao.value;
    var id = sessionStorage.ID_USUARIO;

    if (
    titulo == "" ||
    descricao == ""
    ) {
    
        alert("Preencha todos os campos!")
        return false;
  }

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
        document.getElementById('mensagem_post').innerHTML = "Post publicado com sucesso!";
        setTimeout(function() {
        window.location.reload();
        }, 1500);

       document.getElementById('areaPostagem').style.display = 'none';
       document.getElementById('containerPostagem').style.display = 'none';
       document.getElementById('botaoAdicionar').style.display = 'block';

        listarPosts();
    })

    .catch(function (erro) {
        document.getElementById('mensagem_post_error').innerHTML = "Erro ao publicar o post!";
        console.log("Erro ao publicar:", erro);
    });
    
    return false;
}

function listarMeusPosts() {

    fetch(`/postagens/listarMeusPosts/${sessionStorage.ID_USUARIO}`)
        .then(function (resposta) {
            return resposta.json();
        })

        .then(function (posts) {
            const feed = document.getElementById('feedPosts');

            feed.innerHTML = "";
            for (let i = 0; i < posts.length; i++) {

                const dataBanco = (new Date(posts[i].dataPostagem)).toLocaleDateString('pt-BR');;

               feed.innerHTML += `
                    
                        <div class="cardPost">

                            <div class="titulo">
                                 ${posts[i].titulo}
                           </div>

                           <div class="comentario">
                               ${posts[i].descricao}
                           </div>
                            <br>
                           <div>
                               ♡ ${posts[i].curtidas}
                           

                            <span class="dataPost">
                               <small>${dataBanco}</small>
                            </span>
                        </div>
                    </div>
                <br>
                `;
            }
        })
        .catch(function (erro) {
            console.log("Erro ao listar meus posts:", erro);
        });
}

listarMeusPosts();

