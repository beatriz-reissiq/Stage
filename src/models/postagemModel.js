var database = require("../database/config");

function publicar(titulo, descricao, idUsuario) {

    console.log("MODEL PUBLICAR");

    var instrucaoSql = `
        insert into postagem
        (titulo, descricao, fkUsuario) values ('${titulo}', '${descricao}', ${idUsuario});`;

    console.log(instrucaoSql);
    return database.executar(instrucaoSql);
}

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

function listarMeusPosts(id) {
    var instrucaoSql = `
        select
        titulo,
        descricao,
        curtidas
        from postagem
        where fkUsuario = ${id}
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