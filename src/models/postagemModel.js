var database = require("../database/config");

function publicar(titulo, descricao, idUsuario) {
    var instrucaoSql = 
        `insert into postagem
        (titulo, descricao, fkUsuario) values ('${titulo}', '${descricao}', ${idUsuario});`;

    console.log(instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar(idUsuario) {
    var instrucaoSql = 
    `select
     postagem.idPostagem,
     postagem.titulo,
     postagem.descricao,
     postagem.curtidas,
     usuario.nome,
     usuario.vocacao,
     case
         when curtida.idCurtida is not null then true
         else false
     end as curtiu
     from postagem

     join usuario
     on postagem.fkUsuario = usuario.id

     left join curtida
     on curtida.fkPostagem = postagem.idPostagem
     
     and curtida.fkUsuario = ${idUsuario}
     order by postagem.idPostagem desc; `;

    return database.executar(instrucaoSql);
}


function curtir(fkUsuario, fkPostagem){
    var instrucaoSql = 
        ` insert into curtida
        (fkUsuario, fkPostagem) values
        (${fkUsuario},${fkPostagem}); `;

    var atualizarCurtidas = 
    `update postagem
        set curtidas = curtidas + 1
        where idPostagem = ${fkPostagem}; `;

    database.executar(atualizarCurtidas);
    return database.executar(instrucaoSql);
}

function verificarCurtida(fkUsuario, fkPostagem){
    var instrucaoSql = 
        `select *
        from curtida
        where fkUsuario = ${fkUsuario}
        and fkPostagem = ${fkPostagem};`;
        
    return database.executar(instrucaoSql);
}

function listarMeusPosts(id) {
    var instrucaoSql = 
        `select
        titulo,
        descricao,
        curtidas
        from postagem
        where fkUsuario = ${id}
        order by idPostagem desc;`;

    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    curtir,
    verificarCurtida,
    publicar,
    listarMeusPosts
}