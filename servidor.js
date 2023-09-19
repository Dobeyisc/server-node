const http = require('http');
const nodemon = require('nodemon');

// Arreglo de tareas con objetos
const tareas = [
  { id: 1, descripcion: 'Sacar al perro', completado: true },
  { id: 2, descripcion: 'lavar ropa, hacer aseo, y comida', completado: true },
  { id: 3, descripcion: 'Escribir código', completado: false },
];

const servidor = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/tareas') {
    // Configura el encabezado de respuesta para JSON
    res.setHeader('Content-Type', 'application/json');
    
    // Envía el arreglo de tareas como JSON
    res.end(JSON.stringify(tareas));
  } else {
    // Maneja rutas no válidas
    res.statusCode = 404;
    res.end('Ruta no encontrada');
  }
});

// Inicia el servidor en el puerto 3000
servidor.listen(3000, () => {
  console.log('El servidor está escuchando en http://localhost:3000/');
});

// Configura nodemon para reiniciar automáticamente el servidor al hacer cambios en el código
nodemon({
  script: 'servidor.js',
  ext: 'js',
  watch: '.'
});

nodemon.on('restart', () => {
  console.log('El servidor se ha reiniciado debido a cambios en el código.');
});
