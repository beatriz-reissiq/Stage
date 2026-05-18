function graficoGenero(req, res) {

    dashboardModel.graficoGenero()

        .then(function(resultado){
            res.json(resultado);
        })

        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro);
        });
}

function graficoIdade(req, res) {

    dashboardModel.graficoIdade()

        .then(function(resultado){
            res.json(resultado);
        })

        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro);
        });
}

function graficoQtdPosts(req, res) {

    dashboardModel.graficoQtdPosts()

        .then(function(resultado){
            res.json(resultado);
        })

        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro);
        });
}

function graficoEngajamento(req, res) {

    dashboardModel.graficoEngajamento()

        .then(function(resultado){
            res.json(resultado);
        })

        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro);
        });
}

// kpi
function totalUsuarios(req, res){
    dashboardModel.totalUsuarios()
        .then(function(resultado){
            res.json(resultado);
        })

        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro);
        });
}


function totalPosts(req, res){
    dashboardModel.totalPosts()
        .then(function(resultado){
            res.json(resultado);
        })

        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro);
        });
}


function totalCurtidas(req, res){
    dashboardModel.totalCurtidas()
        .then(function(resultado){
            res.json(resultado);
        })

        .catch(function(erro){
            console.log(erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    graficoGenero,
    graficoIdade,
    graficoQtdPosts,
    graficoEngajamento,
    totalUsuarios,
    totalPosts,
    totalCurtidas,
}
