const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const alumnosRoutes = require('./routes/alumnos_routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
connectDB();

// Middlewares
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');

// Ruta principal
app.get('/', (req, res) => {
    res.render('index');
});

// Rutas de alumnos
app.use('/alumnos', alumnosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor ejecutando en el PUERTO: ${PORT}`);
});