const express = require('express');
const router = express.Router();

router.get('/complete', (req, res) => {
    const completedTasks = tasks.filter(task => task.completed);
    res.json(completedTasks);
  });
  
  // Ruta para listar las tareas incompletas
  router.get('/incomplete', (req, res) => {
    const incompleteTasks = tasks.filter(task => !task.completed);
    res.json(incompleteTasks);
  });
  
  module.exports = router;