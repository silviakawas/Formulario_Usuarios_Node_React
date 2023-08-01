const express = require('express');
const app = express();
const cors = require('cors');

// Rutas

const userRoutes = require('./routes/users.routes');

const fs = require('fs/promises');

// Middlewares para cliente
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use('/api/users', userRoutes);

// Uso de rutas

app.listen(3000, () => console.log('Servidor en ejecución en el puerto 3000'));
