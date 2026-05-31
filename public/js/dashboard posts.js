  let alerts = document.getElementById("alertCadastro");
  let mensagem_error = document.getElementById("mensagem_erro");

function listarPostsAdmin() {

    fetch("/postagens/listarAdmin")
    .then(function(resposta){
        return resposta.json();
    })

    .then(function(posts){

        let feed = document.getElementById("feedPosts");

        feed.innerHTML = "";

        for(let i = 0; i < posts.length; i++){

            feed.innerHTML += `
                <div class="cardPost">

                    <div class="titulo">
                        ${posts[i].titulo}
                    </div>

                    <div class="subtitulo">
                        Autor: ${posts[i].nome}
                    </div>

                    <div class="descricao">
                        ${posts[i].descricao}
                    </div>

                    <button
                        class="btnExcluir"
                        onclick="excluirPost(${posts[i].idPostagem})">
                        Excluir Post
                    </button>

                </div>
            `;
        }
    })

    .catch(function(erro){
        console.log(erro);
    });
}

function excluirPost(idPostagem){

    fetch(`/postagens/excluir/${idPostagem}`, {
        method: "DELETE"
    })

    .then(function(resposta){

        if(resposta.ok){

            alerts.style.display = "flex";
            mensagem_error.innerHTML = "Post excluído com sucesso!";

            setTimeout(() => {
                alerts.style.display = "none";
            }, 2500);

            listarPostsAdmin();
        }
    })

    .catch(function(erro){
        console.log(erro);
    });
}

listarPostsAdmin();