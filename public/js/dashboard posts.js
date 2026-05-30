function excluirPost(idPostagem) {

    fetch(`/postagens/excluir/${idPostagem}`, {
        method: "DELETE"
    })
    .then(function(resposta){

        if(resposta.ok){
            listarPosts();
        }

    });
}

