var database = require("../database/config");

function publicar(titulo, descricao, idUsuario) {
  var instrucaoSql = `
    insert into postagem
    (titulo, descricao, fkUsuario)
    values
    (?, ?, ?);
`;

  return database.executar(instrucaoSql, [titulo, descricao, idUsuario]);
}

function listar(idUsuario) {
  console.log("MODEL LISTAR", idUsuario)

  var instrucaoSql = `select
    postagem.idPostagem,
    postagem.titulo,
    postagem.descricao,
    postagem.dataPostagem,
    count(curtida.idCurtida) as curtidas,
    usuario.nome,
    usuario.vocacao,

    case
        when curtidaUsuario.idCurtida is not null then true
        else false
    end as curtiu
    from postagem

    join usuario
    on postagem.fkUsuario = usuario.id
    left join curtida
    on curtida.fkPostagem = postagem.idPostagem
    left join curtida curtidaUsuario
    on curtidaUsuario.fkPostagem = postagem.idPostagem
    and curtidaUsuario.fkUsuario = ${idUsuario}

    group by
    postagem.idPostagem,
    postagem.titulo,
    postagem.descricao,
    postagem.dataPostagem,
    usuario.nome,
    usuario.vocacao,
    curtidaUsuario.idCurtida

    order by dataPostagem desc;`;

  return database.executar(instrucaoSql);
}

function curtir(fkUsuario, fkPostagem) {
  var instrucaoSql = ` insert into curtida
        (fkUsuario, fkPostagem) values
        (${fkUsuario},${fkPostagem}); `;

  return database.executar(instrucaoSql);
}

function verificarCurtida(fkUsuario, fkPostagem) {
  var instrucaoSql = `select *
        from curtida
        where fkUsuario = ${fkUsuario}
        and fkPostagem = ${fkPostagem};`;

  return database.executar(instrucaoSql);
}

function tirarCurtir(fkUsuario, fkPostagem) {
  var instrucaoSql = `delete from curtida 
        where fkUsuario = ${fkUsuario}
        and fkPostagem = ${fkPostagem};`;

  return database.executar(instrucaoSql);
}

function listarMeusPosts(id) {
  var instrucaoSql = `
   select
    postagem.titulo,
    postagem.descricao,
    postagem.dataPostagem,
    count(curtida.idCurtida) as curtidas
    from postagem

    left join curtida
    on curtida.fkPostagem = postagem.idPostagem

    where postagem.fkUsuario = ${id}
    group by
    postagem.idPostagem,
    postagem.titulo,
    postagem.descricao,
    postagem.dataPostagem
    order by postagem.idPostagem desc;
  `;

  return database.executar(instrucaoSql);
}

function excluir(idPostagem) {
  var excluirCurtidas = `
        delete from curtida
        where fkPostagem = ${idPostagem};
        `;

  var excluirPost = `
        delete from postagem
        where idPostagem = ${idPostagem};
        `;

  return database.executar(excluirCurtidas).then(() => {
    return database.executar(excluirPost);
  });
}

function listarAdmin() {
  console.log("MODEL LISTAR ADMIN")
  var instrucaoSql = `
        select
        postagem.idPostagem,
        postagem.titulo,
        postagem.descricao,
        postagem.dataPostagem,
        count(curtida.idCurtida) as curtidas,
        usuario.nome,
        usuario.vocacao
        from postagem

        join usuario
        on postagem.fkUsuario = usuario.id
        left join curtida
        on curtida.fkPostagem = postagem.idPostagem

        group by
        postagem.idPostagem,
        postagem.titulo,
        postagem.descricao,
        postagem.dataPostagem,
        usuario.nome,
        usuario.vocacao
        order by postagem.dataPostagem desc;
    `;

  return database.executar(instrucaoSql);
}

module.exports = {
  listar,
  listarAdmin,
  curtir,
  verificarCurtida,
  tirarCurtir,
  publicar,
  listarMeusPosts,
  excluir
};
