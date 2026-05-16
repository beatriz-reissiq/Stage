// window.onload = function () {
//    if (sessionStorage.ID_USUARIO) {
//        document.getElementById("btnParticipe").style.display = "none";
//        } else {
//            alert('Você precisa estar logado!')
//            window.location.href = "login.html"
//            return false
//        }
//    }

// listar os posts do banco
function listarPosts() {

    fetch("/postagens/listar")
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
                                <small>${posts[i].vocacao}</small>
                            </div>
                            <div class="comentario">
                                ${posts[i].descricao}
                            </div>
                            <button class="botaoCurtida"
                                onclick="curtir(${posts[i].idPostagem}, ${i})">
                                <span id="coracao${i}">♡</span>
                                <span id="curtidas${i}">0</span>
                            </button>
                        </div>
                    </div>
                </div>
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

    let numeroCurtidas = Number(curtidas.innerHTML);
    if (coracao.innerHTML == "♡") {
        coracao.innerHTML = "❤️";
        numeroCurtidas++;

        fetch("/postagens/curtir", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                idPost: idPost
            })
        });

    } else {

        coracao.innerHTML = "♡";
        numeroCurtidas--;
    }

    curtidas.innerHTML = numeroCurtidas;
}

listarPosts();



