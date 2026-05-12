Create database CubeLearn;
use CubeLearn;
show tables;

describe Usuarios;
describe cubo;
describe estiloDeSolucao;
describe metas;
describe recordsPessoais;
describe registroDeTempo;
describe scramble;


create table Usuarios(
idUsuario int primary key auto_increment,
nome varchar(35),
email varchar(25),
senha varchar(25)
);

create table cubo(
idCubo int primary key auto_increment,
modelo varchar(45),
idUsuario int,
foreign key (idUsuario) references Usuarios(idUsuario)
);

create table estiloDeSolucao(
idEstilo int,
estilo varchar(100),
solucaoDescricao varchar(100),
idCubo int,
primary key (idEstilo, idCubo),
foreign key (idCubo) references cubo(idCubo)
);

create table metas(
idMeta int auto_increment,
meta varchar(100),
idEstilo int,
idCubo int,
foreign key (idCubo) references estiloDeSolucao(idCubo),
foreign key (idEstilo) references estiloDeSolucao(idEstilo)
);

create table recordsPessoais(
idRecord int,
tempoSolucao varchar(45),
idEstilo int,
idCubo int,
primary key (idRecord, idEstilo, idCubo),
foreign key (idCubo) references estiloDeSolucao(idCubo),
foreign key (idEstilo) references estiloDeSolucao(idEstilo)
);

create table registroDeTempo(
idRegistro int auto_increment,
horaDoRegistro timestamp,
tempoSolucao varchar(45),
idEstilo int,
primary key (idRegistro, idEstilo),
foreign key (idEstilo) references estiloDeSolucao(idEstilo)
);

create table scramble(
idScramble int,
movimentos varchar(100),
idRegistro int,
idEstilo int,
primary key (idScramble, idRegistro, idEstilo),
foreign key (idRegistro) references registroDeTempo(idRegistro),
foreign key (idEstilo) references registroDeTempo(idEstilo)
);