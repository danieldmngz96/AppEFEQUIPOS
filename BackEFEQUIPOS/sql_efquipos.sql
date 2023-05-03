CREATE DATABASE IF NOT EXISTS bd_efequipos;

USE bd_efequipos;

CREATE TABLE tb_equipo(
id_equipo int not null auto_increment primary key,
nombre varchar(50),
logo varchar(200),
nombreCliente varchar(50)
);

ALTER TABLE tb_equipo ADD nombreCliente varchar(50);

SELECT * FROM tb_equipo;

INSERT INTO tb_equipo (nombre, nombreCliente, logo) VALUES  ('equipo01', 'Construcciones Durán', 'logo1.png'),
    ('equipo02', 'Materiales Santa Lucía', 'logo2.png'),
    ('equipo03', 'Construcciones Gómez', 'logo3.png'),
    ('equipo04', 'Materiales San Miguel', 'logo4.png'),
    ('equipo05', 'Construcciones y Materiales González', 'logo5.png'),
    ('equipo06', 'Materiales y Proyectos Morales', 'logo6.png'),
    ('equipo07', 'Construcciones de la Torre', 'logo7.png'),
    ('equipo08', 'Materiales y Servicios García', 'logo8.png'),
    ('equipo09', 'Construcciones y Proyectos Flores', 'logo9.png'),
    ('equipo10', 'Materiales y Construcciones Hernández', 'logo10.png'),
    ('equipo11', 'Construcciones y Materiales Martínez', 'logo11.png'),
    ('equipo12', 'Materiales de Construcción López', 'logo12.png'),
    ('equipo13', 'Construcciones y Materiales Castro', 'logo13.png'),
    ('equipo14', 'Materiales y Construcciones Díaz', 'logo14.png'),
    ('equipo15', 'Construcciones y Materiales Rodríguez', 'logo15.png'),
    ('equipo16', 'Materiales y Servicios Martínez', 'logo16.png'),
    ('equipo17', 'Construcciones y Materiales Vázquez', 'logo17.png'),
    ('equipo18', 'Materiales y Construcciones Gutiérrez', 'logo18.png'),
    ('equipo19', 'Construcciones y Proyectos Gómez', 'logo19.png'),
    ('equipo20', 'Materiales de Construcción Sánchez', 'logo20.png'),
    ('equipo21', 'Construcciones y Materiales Ortiz', 'logo21.png'),
    ('equipo22', 'Materiales y Servicios Ramírez', 'logo22.png'),
    ('equipo23', 'Construcciones y Materiales Álvarez', 'logo23.png'),
    ('equipo24', 'Materiales y Proyectos Pérez', 'logo24.png'),
    ('equipo25', 'Construcciones y Materiales Reyes', 'logo25.png'),
    ('equipo26', 'Materiales y Construcciones García', 'logo26.png'),
    ('equipo27', 'Construcciones y Servicios Hernández', 'logo27.png'),
    ('equipo28', 'Materiales y Construcciones Medina', 'logo28.png'),
    ('equipo29', 'Construcciones y Materiales Vargas', 'logo29.png'),
    ('equipo30', 'Materiales y Construcciones Ramos', 'logo30.png'),
    ('equipo31', 'Construcciones y Proyectos Pérez', 'logo31.png'),
    ('equipo32', 'Materiales y Servicios Ruiz', 'logo32.png'),
    ('equipo33', 'Construcciones y Materiales Aguilar', 'logo33.png'),
    ('equipo34', 'Materiales y Construcciones Muñoz', 'logo34.png'),
    ('equipo35', 'Construcciones y Materiales Romero', 'logo35.png'),
    ('equipo36', 'Materiales y Construcciones Núñez', 'logo36.png'),
    ('equipo37', 'Construcciones y Proyectos Torres', 'logo37.png'),
    ('equipo38', 'Materiales y Construcciones Herrera', 'logo38.png'),
    ('equipo39', 'Materiales y Construcciones Herrera', 'logo39.png'),
    ('equipo40', 'Materiales y Servicios Flores', 'logo40.png'),
    ('equipo41', 'Construcciones y Materiales Gutiérrez', 'logo41.png'),
    ('equipo42', 'Materiales y Construcciones Ortiz', 'logo42.png'),
    ('equipo43', 'Cliente AQ', 'logo43.png'),
    ('equipo44', 'Cliente AR', 'logo44.png'),
    ('equipo45', 'Cliente AS', 'logo45.png'),
    ('equipo46', 'Cliente AT', 'logo46.png'),
	('equipo47', 'Cliente DD', 'logo43.png'),
    ('equipo48', 'Cliente AA', 'logo44.png'),
    ('equipo49', 'Cliente ARII', 'logo45.png'),
    ('equipo50', 'Cliente ATLATIS', 'logo46.png');
   