const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployedSchema = new Schema({
    Employedpass: String,
    Employedname: String,
    Employedrol: String,
    Employeduser: String,
    Employedtel: String,
    Employedemail: String,
    Employedcity: String,
    Employedposition: String,
})

module.exports = mongoose.model('prueba', EmployedSchema, 'pruebaData');