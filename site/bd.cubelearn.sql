Create database CubeLearn;
use CubeLearn;


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

create table registroDeTempo(
idRegistro int auto_increment,
horaDoRegistro datetime default current_timestamp,
tempoSolucao varchar(45),
idCubo int,
primary key (idRegistro, idCubo),
foreign key (idCubo) references cubo(idCubo)
);

select * from registroDeTempo;


select * from Usuarios;

select Usuarios.nome as nome, cubo.modelo as modelo from Usuarios join cubo on cubo.idUsuario = Usuarios.idUsuario where Usuarios.idUsuario = '1';

select Usuario.nome as usuario, Usuario.email as email, Cubo.modelo as modelo, horaDoRegistro, tempoSolucao from Usuarios as Usuario 
 join cubo as Cubo on Usuario.idUsuario = Cubo.idUsuario
 join registroDeTempo on registroDeTempo.idCubo = Cubo.idCubo
 WHERE email = 'ADM@gmail.com';

select Usuario.nome as usuario, Usuario.email as email, Cubo.modelo as modelo, horaDoRegistro, tempoSolucao, Cubo.idCubo from Usuarios as Usuario 
 join cubo as Cubo on Usuario.idUsuario = Cubo.idUsuario
 join registroDeTempo on registroDeTempo.idCubo = Cubo.idCubo
 WHERE email = 'teste@.com';

select * from cubo;
select * from registroDeTempo;
delete from registroDeTempo where idRegistro >= 0;


select Usuario.nome as usuario, Usuario.email as email, Cubo.modelo as modelo, horaDoRegistro, tempoSolucao from Usuarios as Usuario 
 join cubo as Cubo on Usuario.idUsuario = Cubo.idUsuario
 join registroDeTempo on registroDeTempo.idCubo = Cubo.idCubo
 WHERE email = 'iago@gmail.com';