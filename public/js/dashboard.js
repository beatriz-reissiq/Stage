fetch("/dashboard/graficoGenero")
    .then(function(resposta){
        return resposta.json();
    })

    .then(function(dados){

        let homens = 0;
        let mulheres = 0;

        for(let i = 0; i < dados.length; i++){
            if(dados[i].genero == "Homem"){
                homens = dados[i].quantidade;
            } else {
                mulheres = dados[i].quantidade;
            }
        }

        criarGraficoGenero(homens, mulheres);
    });

    fetch("/dashboard/graficoEngajamento")
    .then(function(resposta){
        return resposta.json();
    })

    .then(function(dados){

        let meses = [];
        let curtidas = [];

        for(let i = 0; i < dados.length; i++){
            meses.push(dados[i].mes);
            curtidas.push(dados[i].totalCurtidas);
        }

        criarGraficoEngajamento(meses, curtidas);
    });

    fetch("/dashboard/graficoQtdPosts")
    .then(function(resposta){
        return resposta.json();
    })

    .then(function(dados){

        let meses = [];
        let quantidadePosts = [];

        for(let i = 0; i < dados.length; i++){
            meses.push(dados[i].mes);
            quantidadePosts.push(dados[i].totalPosts);
        }

        criarGraficoPosts(meses, quantidadePosts);
    });

    fetch("/dashboard/graficoIdade")

    .then(function(resposta){
        return resposta.json();
    })

    .then(function(dados){

        let faixaEtaria = [];
        let quantidade = [];

        for(let i = 0; i < dados.length; i++){
            faixaEtaria.push(dados[i].faixaEtaria);
            quantidade.push(dados[i].quantidade);
        }

        criarGraficoIdade(faixaEtaria, quantidade);
    });

// kpi

fetch("/dashboard/totalUsuarios")
    .then(function(resposta){
        return resposta.json();
    })

    .then(function(dados){
        document.getElementById("kpiUsuarios")
            .innerHTML = dados[0].totalUsuarios;
    });

fetch("/dashboard/totalPosts")
    .then(function(resposta){
        return resposta.json();
    })

    .then(function(dados){
        document.getElementById("kpiPosts")
            .innerHTML = dados[0].totalPosts;
    });

fetch("/dashboard/totalCurtidas")
    .then(function(resposta){
        return resposta.json();
    })

    .then(function(dados){
        document.getElementById("kpiCurtidas")
            .innerHTML = dados[0].totalCurtidas;
    });
