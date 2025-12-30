
// Detalles de implementación
let enlace = "https://n-app.io/log";
function logMessage(mensaje) {
    console.log(`The URL is: ${enlace}: ${mensaje}`);
}

// Detalles de interfaz
module.exports.enlaceOut = enlace;
module.exports.logMessageOut = logMessage;
exports.logMessage = logMessage;
module.exports = logMessage;

// Importación y uso de módulos y sus funciones
require('./logger_module.js');
require('./logger_module');
const logger = require('./logger_module.js')
console.log(logger.enlaceOut);
logger.logMessageOut("Un mensaje del modulo");
logger("Otro mensaje del modulo");

// La función alrededor(wrapper) de los módulos *IIFE
(function (exports, require, module, __filename, __dirname) {
    // El código del módulo va aquí
    console.log(__filename, __dirname);
})();

 // Los módulos nativos (más comunes)
 const path = require('path');
    let pathObj = path.parse(__filename);
    console.log(path.basename(__dirname), pathObj);
    
const os = require('os');
    var totalMem = os.totalmem();
    var freeMem = os.freemem();
    console.log(`Total Mem: ${totalMem} & Free Mem: ${freeMem}`);

const fs = require('fs');
    let filesArray = fs.readdirSync('./'); // Syncrhonous
    var filesArrayAsync = fs.readdir('./', function(err, files) {
        if (err) console.log('Error', err);
        else console.log('Async Files:', files);});

// Lideando con eventos
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', (arg) => { // e, eventArg
    console.log('Listener called', arg);
});
emitter.emit('messageLogged', { id: 1, url: 'https://n-app.io' });

// Heredando de EventEmitter
class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('messageLogged', { id: 1, url: 'https://n-app.io' });
    }
}

module.exports = Logger;
const LoggerClass = require('./logger_module.js');
const loggerInstance = new LoggerClass();   
loggerInstance.on('messageLogged', (arg) => {
    console.log('Listener called from Logger class', arg);
});
loggerInstance.log('Hola Mundo');
// .once() para escuchar solo una vez   

// Trabajando con HTTP
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/api/n-app') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);
console.log('Listening on port 3000...');

// Trabajando con Express.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World from Express');
});

app.get('/api/n-app', (req, res) => {
    res.send([1, 2, 3]);
});

app.listen(3000, () => console.log('Listening on port 3000...'));
