//const router = require("express").Router();
const express = require("express");
const conexion = require("./config/conexion");
const index = require("./index");
const almacen = conexion.almacen;
const router = express.Router();
//---------- agregamos rutas para almacen--------
//get empleados
router.get("/empleados", (req, res) => {
  let sql = "select * from empleados";
  almacen.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
}); 

//agregar empleado
router.post("/add-empleado", (req, res) => {
    const { nombre,  celular, e_mail } = req.body;
  
    let sql = `INSERT INTO empleados(nombre, celular, e_mail) values('${nombre}','${celular}','${e_mail}')`;
    almacen.query(sql, (err, rows, fields) => {
      if (err) throw err;
      else {
        res.json({ status: "empleado agregado" });
      }
    });
  });

module.exports = router;