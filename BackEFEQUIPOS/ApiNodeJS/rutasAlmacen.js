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
  const { nombre, celular, e_mail } = req.body;

  let sql = `INSERT INTO empleados(nombre, celular, e_mail) values('${nombre}','${celular}','${e_mail}')`;
  almacen.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "empleado agregado" });
    }
  });
});

//---------- agregamos rutas para despachos--------
//get despachos
router.get("/despachos", (req, res) => {
  let sql = "SELECT * FROM almacen.despachos;";
  almacen.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});
//agregar despachos

router.post("/add-despachos", (req, res) => {
  const {  cod_obra, cod_cont, fec_des, despachador, obs , conductor_veh, tipo_veh, autorizador, peso_total, area_total , placa_veh ,descripcion, cantidad } = req.body;

  let sql = `INSERT INTO despachos(cod_obra, cod_cont, fec_des, despachador, obs, conductor_veh, tipo_veh, autorizador, peso_total, area_total, placa_veh, descripcion, cantidad) values('${cod_obra}','${cod_cont}','${fec_des}', '${despachador}', '${obs}','${conductor_veh}', '${tipo_veh}', '${autorizador}','${peso_total}','${area_total}','${placa_veh}','${descripcion}','${cantidad}')`;
  almacen.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "despacho agregado" });
    }
  });
});
//---------- agregamos rutas para clientes--------
//get clientes
router.get("/clientes", (req, res) => {
  let sql = "SELECT * FROM almacen.clientes;";
  almacen.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});
//MODIFICAR empleado-------------
router.put("/:id_empleado", (req, res) => {
  const { id_empleado } = req.params;
  const { nombre, id_cargo, celular, e_mail } = req.body;

  let sql = `update empleados set 
  nombre ='${nombre}',
  id_cargo='${id_cargo}',
  celular='${celular}',
  e_mail='${e_mail}'
  where id_empleado = '${id_empleado}'`;

  almacen.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "empleado modificado" });
    }
  });
});

//eliminar
router.delete("/empleados/:id", (req, res) => {
  const { id } = req.params;

  let sql = `delete from empleados where id_empleado = '${id}'`;
  almacen.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "empleado eliminado" });
    }
  });
});


module.exports = router;
