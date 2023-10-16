const express = require('express');
const router = express.Router();

// Ruta para crear una nueva tarea (POST)
router.post('/create', (req, res) => {
    const newTask = req.body; // Se espera que el cuerpo de la solicitud contenga los datos de la nueva tarea
    tasks.push(newTask);
    res.json(newTask);
  });
  
  // Ruta para eliminar una tarea por ID (DELETE)
  router.delete('/delete/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
      tasks.splice(index, 1);
      res.sendStatus(200);
    } else {
      res.sendStatus(404); // La tarea no se encontró
    }
  });
  
  // Ruta para actualizar una tarea por ID (PUT)
  router.put('/update/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const updatedTask = req.body; // Se espera que el cuerpo de la solicitud contenga los datos actualizados de la tarea
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
      tasks[index] = { ...tasks[index], ...updatedTask };
      res.json(tasks[index]);
    } else {
      res.sendStatus(404); // La tarea no se encontró
    }
  });
  
  module.exports = router;