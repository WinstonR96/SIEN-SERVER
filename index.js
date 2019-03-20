const express = require('express')
const morgan = require('morgan')
const app = express()
const { mongoose } = require('./helpers/database')
const docente = require('./routes/docentes.routes')
//Configuraciones
app.set('port', process.env.PORT || 3000)


//Middlewares
app.use(morgan('dev'))
app.use(express.json())

//Rutas
app.use("/api/v1",docente)

//Inicio de servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto',app.get('port'))
})