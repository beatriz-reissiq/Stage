var database = require("../database/config");

function listar() {

    var instrucaoSql = `
      select
        postagem.titulo,
        postagem.descricao,
        usuario.nome,
        usuario.vocacao
        from postagem
        join usuario
        on postagem.fkUsuario = usuario.id;
    `;

    return database.executar(instrucaoSql);
}

function curtir(idPost) {

    var instrucaoSql = `
        update postagem
        set curtidas = curtidas + 1
        where idPostagem = ${idPost};
    `;

    return database.executar(instrucaoSql);
}

function emAlta() {

    var instrucaoSql = `
    
        select
        postagem.idPostagem,
        postagem.titulo,
        postagem.descricao,
        postagem.curtidas,
        usuario.nome,
        usuario.vocacao
        from postagem
        join usuario
        on postagem.fkUsuario = usuario.id
        order by postagem.curtidas desc;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    curtir
}