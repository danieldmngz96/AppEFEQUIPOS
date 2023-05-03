require('./config/conexion');
const express = require('express')
const port = 3000
const cors = require("cors");
const conexiones = require('./config/conexion');
const rutas = require('./rutas');


// express
const app = express()

//Evitar error de cors
app.use(cors())

//admitir
app.use(express.json())

//configurar
app.set('port',port)

// Rutas para bd_efequipos
app.use('/api', require('./rutas'));

// Rutas para almacen
app.use('/almacen',require('./rutasAlmacen'));

//rutas old
//app.use('/api', require('./rutas'))


//inicializar express
app.listen(app.get('port'),(error)=>{
    if(error)
    {console.log('error al iniciar el servidor: '+error)}
    else{
        console.log('servidor iniciado en el prueto: '+port)
    }
})