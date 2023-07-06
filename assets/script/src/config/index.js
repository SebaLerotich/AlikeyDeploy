const app = require('./app');
const PORT = require('./app')
const database = require('./database');


function main() {
    database.connect((err) => {
        if (err) throw err;
        console.log('Conectado a la Base de Datos');
    });

    app.listen(PORT, () => {
        console.log('Servidor Encendido');
    });
}

main();