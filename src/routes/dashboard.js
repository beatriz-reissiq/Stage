router.get("/graficoGenero", function(req, res){
    dashboardController.graficoGenero(req, res);
});

router.get("/graficoIdade", function(req, res){
    dashboardController.graficoIdade(req, res);
});

router.get("/graficoQtdPosts", function(req, res){
    dashboardController.graficoQtdPosts(req, res);
});

router.get("/graficoEngajamento", function(req, res){
    dashboardController.graficoEngajamento(req, res);
});

router.get("/totalUsuarios", function(req, res){
    dashboardController.totalUsuarios(req, res);
});

router.get("/totalPosts", function(req, res){
    dashboardController.totalPosts(req, res);
});

router.get("/totalCurtidas", function(req, res){
    dashboardController.totalCurtidas(req, res);
});
