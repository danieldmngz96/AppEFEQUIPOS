//const router = require("express").Router();
const express = require("express");
const conexion = require("./config/conexion");
const index = require("./index");
const bd_efequipos = conexion.bd_efequipos;
const router = express.Router();

//---------- agregamos rutas para bd_efequipos--------
//get equipos
router.get("/", (req, res) => {
  let sql = "select * from tb_equipo";
  bd_efequipos.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

// get un equipo obtener por id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  let sql = "select * from tb_equipo where id_equipo = ?";
  bd_efequipos.query(sql, [id], (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//agregar equipo
router.post("/", (req, res) => {
  const { nombre, logo, nombreCliente } = req.body;

  let sql = `insert into tb_equipo(nombre,nombreCliente,logo) values('${nombre}','${logo}','${nombreCliente}')`;
  bd_efequipos.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "equipo agregado" });
    }
  });
});

//eliminar
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  let sql = `delete from tb_equipo where id_equipo = '${id}'`;
  bd_efequipos.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "equipo eliminado" });
    }
  });
});

//modificar
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, logo, nombreCliente } = req.body;

  let sql = `update tb_equipo set 
        nombre ='${nombre}',
        logo='${logo}',
        nombreCliente='${nombreCliente}'
        where id_equipo = '${id}'`;

  bd_efequipos.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "equipo modificado" });
    }
  });
});
//----------------------Login Registrar Usuario --------------------//
//Registrar Usuario

router.post("/register", (req, res) => {
  const { email, password, name } = req.body;

  let sql = `insert into users(email,password,name) values('${email}','${password}','${name}')`;
  bd_efequipos.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "Registrado con exito" });
    }
  });
});
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Verificar si el correo electrónico y la contraseña son válidos
  let sql = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
  bd_efequipos.query(sql, (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else if (rows.length == 0) {
      // No se encontró un usuario con ese correo electrónico y contraseña
      res.status(401).json({ error: 'Credenciales inválidas' });
    } else {
      // Se encontró un usuario con ese correo electrónico y contraseña
      const user = rows[0];
      res.status(200).json({ message: 'Inicio de sesión exitoso', user });
    }
  });
});

//----------------------Login Registrar Usuario --------------------//

module.exports = router;
