const mongoose = require('mongoose');
const config = require('./controller/config');
const app = require('./app');
const port = 3000;
mongoose.connect('mongodb+srv://pruebaTP:Y2t2OrJaeaDdVxlm@prueba-back.fjqs7.mongodb.net/prueba?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if(err){
        console.log('Error al conectarse a la base de datos', err);
    } else {
        app.listen(port,()=>{
            console.log('Conexion en el puerto',port);
        })
    }
}); 