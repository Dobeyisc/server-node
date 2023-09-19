const http = require('http');
const chalk = require('chalk');

// Constantes para el host y el puerto
const host = '127.0.0.1';
const puerto = 8000; // Puedes cambiarlo a 8080 si lo prefieres

// Crear el servidor HTTP
const servidor = http.createServer((solicitud, respuesta) => {
  // Configurar encabezado de respuesta
  respuesta.setHeader('Content-Type', 'application/json');

  // Objeto JSON de respuesta
  const respuestaJSON = {
    nombre: 'Esteban',
    mensaje: 'Hola desde mi servidor HTTP en Node.js',
  };

  // Enviar la respuesta JSON
  respuesta.end(JSON.stringify(respuestaJSON));
});

// Escuchar en el puerto y el host especificados
servidor.listen(puerto, host, () => {
  const mensaje = `El servidor está escuchando en ${chalk.green(`http://${host}:${puerto}/`)}`;
  console.log(mensaje);
});