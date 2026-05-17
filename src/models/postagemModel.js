var database = require("../database/config");

function listar() {
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
        order by postagem.idPostagem desc;
    `;
    return database.executar(instrucaoSql);
}


// POSTS EM ALTA
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
        order by postagem.curtidas asc;
    `;
    return database.executar(instrucaoSql);
}


// CURTIR
function curtir(idPost) {

    var instrucaoSql = `
        update postagem
        set curtidas = curtidas + 1
        where idPostagem = ${idPost};
    `;
    return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, idUsuario) {
    var instrucaoSql = `
        insert into postagem
        (titulo, descricao, fkUsuario)
        values
        ('${titulo}', '${descricao}', ${idUsuario});
    `;
    return database.executar(instrucaoSql);
}

function listarMeusPosts(idUsuario) {
    var instrucaoSql = `
        select
        titulo,
        descricao,
        curtidas
        from postagem
        where fkUsuario = ${idUsuario}
        order by idPostagem desc;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    emAlta,
    curtir,
    publicar,
    listarMeusPosts
}