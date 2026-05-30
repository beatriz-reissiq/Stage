var database = require("../database/config");

function graficoGenero() {
  var instrucaoSql = `
        select genero,
        count(id) as quantidade
        from usuario
        group by genero;
    `;

  return database.executar(instrucaoSql);
}

function graficoIdade() {
  var instrucaoSql = `
            select count(id) as quantidade from 
            (select id from usuario where dataNascimento IS NOT NULL group by id) 
            as ids;
        `;

  return database.executar(instrucaoSql);
}

function graficoQtdPosts() {
  var instrucaoSql = `
        select
        month(dataPostagem) as mes,
        count(idPostagem) as totalPosts
        from postagem
        where year(dataPostagem) > 2025
        group by month(dataPostagem)
        order by mes;
    `;

  return database.executar(instrucaoSql);
}

function graficoEngajamento() {
  var instrucaoSql = `
        select
        month(postagem.dataPostagem) as mes,
        count(curtida.idCurtida) as totalCurtidas
        from postagem
        left join curtida
        on curtida.fkPostagem = postagem.idPostagem
        where year(postagem.dataPostagem) >= 2025
        group by month(postagem.dataPostagem)
        order by month(postagem.dataPostagem);
    `;

  return database.executar(instrucaoSql);
}

// kpi
function totalUsuarios() {
  var instrucaoSql = `
        select count(id) as totalUsuarios
        from usuario;
    `;

  return database.executar(instrucaoSql);
}

function totalPosts() {
  var instrucaoSql = `
        select count(idPostagem) as totalPosts
        from postagem;
    `;

  return database.executar(instrucaoSql);
}

function totalCurtidas() {
  var instrucaoSql = `
        select count(*) as totalCurtidas
        from curtida;
    `;

  return database.executar(instrucaoSql);
}

module.exports = {
  graficoGenero,
  graficoIdade,
  graficoQtdPosts,
  graficoEngajamento,
  totalUsuarios,
  totalPosts,
  totalCurtidas,
};
