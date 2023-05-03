const mysql = require('mysql');

// Configuración para la base de datos bd_efequipos

const conexion1 = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: "3306",
  database: "bd_efequipos",
});
// Configuración para la base de datos almacen
const conexion2 = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: "3306",
  database: "almacen",
}); 
//validacion de erro en las bases de datos
conexion1.connect((error) => {
  if (error) {
    console.error("Error de conexión a la base de datos bd_efequipos: ", error);
    return;
  }
  console.log("Conexión exitosa a la base de datos bd_efequipos");
});

// Conexión a la base de datos almacen
conexion2.connect((error) => {
  if (error) {
    console.error("Error de conexión a la base de datos almacen: ", error);
    return;
  }
  console.log("Conexión exitosa a la base de datos almacen");
});

module.exports = {
    bd_efequipos: conexion1,
    almacen: conexion2,
  }; 
  
