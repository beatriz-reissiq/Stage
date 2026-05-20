 window.onload = function () {
    if (sessionStorage.ID_USUARIO) {
        } else {
            alert('Você precisa estar logado!')
            window.location.href = "login.html"
            return false
        }
    }

function listarPosts() {

    fetch(`/postagens/listar/${sessionStorage.ID_USUARIO}`)
        .then(function (resposta) {
            return resposta.json();
        })

        .then(function (posts) {
            const feed = document.getElementById('feedPosts');

            feed.innerHTML = "";
            for (let i = 0; i < posts.length; i++) {

               feed.innerHTML += `
                <div class="container-conteudo">
                    <div class="conteudo-post">
                        <div class="cardPost">
                            <div class="titulo">
                                ${posts[i].titulo}
                            </div>
                            <div class="subtitulo">
                                <small><b>${posts[i].nome}</b></small>
                            </div>
                            <div class="subtitulo">
                                <small>Talento: ${posts[i].vocacao}</small>
                            </div>
                            <br>
                            <div class="comentario">
                                ${posts[i].descricao}
                            </div>
                            <br>
                            <button class="botaoCurtida"
                                onclick="curtir(${posts[i].idPostagem}, ${i})">
                                <span id="coracao${i}">
                                    ${posts[i].curtiu ? "❤️" : "♡"}
                                </span>
                                <span id="curtidas${i}">
                                    ${posts[i].curtidas}
                                </span>
                            </button>
                            
                            <span>
                                ${posts[i].dataPostagem}
                            </span>
                        </div>
                    </div>
                </div>
                <br><br>
                `;
            }
        })
        .catch(function (erro) {
            console.log("Erro ao listar posts:", erro);
        });
}

function curtir(idPost, indice) {

    const coracao = document.getElementById(`coracao${indice}`);
    const curtidas = document.getElementById(`curtidas${indice}`);

    fetch("/postagens/verificarCurtida", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            fkUsuarioServer: sessionStorage.ID_USUARIO,
            fkPostagemServer: idPost
        })
    })

    .then(function(resposta){
        return resposta.json();
    })

    .then(function(resultado){
        if(resultado.curtiu){
            console.log("Você já curtiu esse post!");
            return;
        }

        fetch("/postagens/curtir", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                fkUsuarioServer: sessionStorage.ID_USUARIO,
                fkPostagemServer: idPost
            })
        })

        .then(function(){
            coracao.innerHTML = "❤️";
            let numeroCurtidas = Number(curtidas.innerHTML);
            numeroCurtidas++;
            curtidas.innerHTML = numeroCurtidas;
        });
    });
}

listarPosts();



