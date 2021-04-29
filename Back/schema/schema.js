const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployedSchema = new Schema({
    Employedid: String,
    Employedname: String
})

module.exports = mongoose.model('prueba', EmployedSchema, 'pruebaData');