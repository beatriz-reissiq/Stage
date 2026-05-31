window.onload = function () {
    idadeMinima();
    verificarPerfil();
    botao();
}

function idadeMinima() {

    let dataNasc = new Date(sessionStorage.DATANASC_USUARIO);
    let dataHoje = new Date();
    let tempoDeVida = dataHoje.getTime() - dataNasc.getTime();
    let idade = tempoDeVida / 1000 / 60 / 60 / 24 / 365;

    if (idade < 16) {
        alert("Você deve ter no mínimo 16 anos para postar!");
        return false;
    }

    return true;
}


function verificarPerfil() {
    var sessaoID = sessionStorage.ID_USUARIO;
    var genero = sessionStorage.GENERO_USUARIO;
    var dataNasc = sessionStorage.DATANASC_USUARIO;

    if ( sessaoID, genero == undefined ||
        sessaoID, dataNasc == undefined ) {

        document.getElementById("popupPerfil")
            .style.display = "flex";
    } else {
        document.getElementById("popupPerfil")
            .style.display = "none";
    }
}

function salvarPerfil() {
    var genero = select_genero.value;
    var dataNasc = input_idade.value;
    var id = sessionStorage.ID_USUARIO;

    fetch("/usuarios/completarPerfil", {

        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            generoServer: genero,
            dataNascimentoServer: dataNasc,
            idUsuarioServer: id
        })
    })

    .then(function () {

        sessionStorage.GENERO_USUARIO = genero;
        sessionStorage.DATANASC_USUARIO = dataNasc;

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

