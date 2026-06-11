create table usuario (
id int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50),
vocacao varchar(50),
genero varchar(20),
dataNascimento date,
Adm tinyint default 0
);

create table postagem (
    idPostagem int primary key auto_increment,
    titulo varchar(100),
    descricao varchar(300),
    fkUsuario int,
     dataPostagem datetime default current_timestamp,
    constraint fkUsuarioPostagem
    foreign key (fkUsuario)
    references usuario(id)
);

create table curtida (
    idCurtida int primary key auto_increment,
    fkUsuario int,
    fkPostagem int,
    
    constraint fkCurtidaUsuario
    foreign key (fkUsuario)
    references usuario(id),
    
    constraint fkCurtidaPostagem
    foreign key (fkPostagem)
    references postagem(idPostagem)
);

-- usuário administrador

insert into usuario values
(1, 'Administração', 'user_adm@email.com', 'admUser#123', 'null', 'null', null, 1);


