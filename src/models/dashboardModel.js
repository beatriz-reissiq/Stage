var database = require("../database/config");

function graficoGenero(){

    var instrucaoSql = `
        select genero,
        count(id) as quantidade
        from usuario
        group by genero;
    `;

    return database.executar(instrucaoSql);
}

function graficoIdade(){

   // var instrucaoSql = `
   //     select
   //     case
   //         when idade between 16 and 20 then '16-20'
   //         when idade between 21 and 30 then '21-30'
   //         else '30+'
   //     end as faixaEtaria,
   //     count(id) as quantidade
   //     from usuario
   //     group by faixaEtaria;
   // `;

        var instrucaoSql = `
            select count(id) as quantidade from ( 
                select id from usuario where dataNascimento IS NOT NULL group by id
            ) as ids;
        `;

    return database.executar(instrucaoSql);
}

function graficoQtdPosts(){

    var instrucaoSql = `
        select
        month(dataPostagem) as mes,
        count(idPostagem) as totalPosts
        from postagem
        where year(dataPostagem) > 2025
        group by month(dataPostagem);
    `;

    return database.executar(instrucaoSql);
}

function graficoEngajamento(){
    var instrucaoSql = `
        select
        month(dataPostagem) as mes,
        sum(curtidas) as totalCurtidas
        from postagem
        where year(dataPostagem) > 2025
        group by month(dataPostagem)
    `;

    return database.executar(instrucaoSql);
}

// kpi
function totalUsuarios(){
    var instrucaoSql = `
        select count(id) as totalUsuarios
        from usuario;
    `;

    return database.executar(instrucaoSql);
}


function totalPosts(){

    var instrucaoSql = `
        select count(idPostagem) as totalPosts
        from postagem;
    `;

    return database.executar(instrucaoSql);
}


function totalCurtidas(){

    var instrucaoSql = `
        select sum(curtidas) as totalCurtidas
        from postagem;
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

}