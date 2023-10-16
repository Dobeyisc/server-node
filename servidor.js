const express = require("express");
const app = express();

const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

// Arreglo de tareas con objetos
const task = [
  { id: 1, descripcion: "Sacar al perro", complete: true },
  { id: 2, descripcion: "lavar ropa, hacer aseo, y comida", complete: true },
  { id: 3, descripcion: "Escribir código", complete: false },
];

// Configura el enrutador para las vistas
app.use('/list-view', listViewRouter);

// Configura el enrutador para la edición
app.use('/list-edit', listEditRouter);

// Configura una ruta para obtener todas las tareas
app.get("/task", (req, res) => {
  // Configura el encabezado de respuesta para JSON
  res.setHeader("Content-Type", "application/json");

  // Envía el arreglo de tareas como JSON
  res.json(task);
});

// Configura una ruta por defecto para manejar rutas no válidas
app.use((req, res) => {
  res.status(404).send("Ruta no encontrada");
});

// Inicia el servidor en el puerto 3000
const port = 3000;
app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}/`);
});
