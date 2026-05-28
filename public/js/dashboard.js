
const grfGenero = document.getElementById('graficoGenero');
const graficoGenero = new Chart(grfGenero, {

    type: 'doughnut',
    data: {
        labels: ['Homens', 'Mulheres','Outros'],
        datasets: [{
            data: [],
            backgroundColor: [
                '#5E3527',
                '#B39289'
            ],
            borderWidth: 1
        }]
    },

    options: {
        plugins: {
            title: {
                display: true,
                text: 'Usuários por Gênero'
            },

            legend: {
                position: 'bottom'
            }
        }
    }
});


const grfIdade = document.getElementById('graficoIdade');
const graficoIdade = new Chart(grfIdade, {

    type: 'doughnut',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: [
                '#5E3527',
                '#B39289',
                '#835e54'
            ],
            borderWidth: 1
        }]
    },

    options: {
        plugins: {
            title: {
                display: true,
                text: 'Faixa Etária dos Usuários'
            },

            legend: {
                position: 'bottom'
            }
        }
    }
});


const grfPosts = document.getElementById('graficoQtdPosts');
const graficoPosts = new Chart(grfPosts, {

    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Quantidade de Posts',
            data: [],
            backgroundColor: [
                '#5E3527',
                '#B39289',
                '#835e54',
                '#a27b70',
                '#d1b5ad'
            ],
            borderWidth: 1
        }]
    },

    options: {
        plugins: {
            legend: {
                display: false
            },

            title: {
                display: true,
                text: 'Quantidade de Posts Mensais',
                color: '#5E3527',
                font: {
                    size: 15
                }
            }
        },

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const grfEngajamento = document.getElementById('graficoEngajamento');
const graficoEngajamento = new Chart(grfEngajamento, {

    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Curtidas Mensais',
            data: [],
            borderColor: '#5E3527',
            backgroundColor: '#B39289',
            borderWidth: 2,
            fill: false
        }]
    },

    options: {
        plugins: {
            legend: {
                display: false
            },

            title: {
                display: true,
                text: 'Curtidas Mensais',
                color: '#5E3527',
                font: {
                    size: 15
                }
            }
        },

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

fetch("/dashboard/graficoGenero")
    .then(function(resposta){
        return resposta.json();
    })

    .then(function(dados){
        let homens = 0;
        let mulheres = 0;
        let outros = 0;

        for(let i = 0; i < dados.length; i++){
            if(dados[i].genero == "Homem"){
                homens = dados[i].quantidade;
            } if (dados[i].genero == "Mulher") {
                mulheres = dados[i].quantidade;
            } else {
                outros   = dados[i].quantidade;
            }
        }

        graficoGenero.data.datasets[0].data = [homens, mulheres, outros];
        graficoGenero.update();
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

        graficoIdade.data.labels = faixaEtaria;
        graficoIdade.data.datasets[0].data = quantidade;
        graficoIdade.update();
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

        graficoPosts.data.labels = meses;
        graficoPosts.data.datasets[0].data = quantidadePosts;
        graficoPosts.update();
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

        graficoEngajamento.data.labels = meses;
        graficoEngajamento.data.datasets[0].data = curtidas;
        graficoEngajamento.update();
    });


//kpi
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
