const schema = require('../schema/schema')
const axios = require('axios')
const jwt = require('jsonwebtoken');

exports.find = async (req, res) => {
    schema.find({ Employeduser: req.body.user, Employedpass: req.body.password }, (err, emp) => {
        if (err || !res) {
            console.log(err);
            return res.send({ statusCode: 500, message: 'Error al buscar empleado' });
        }
        return res.send({
            message: 'success',
            empleados: emp
        })
    })
}

exports.poke = async (req, res) => {
    let pokemon = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=5')
        .then(respuesta => {
            // console.log(respuesta);
            res.status(200).json({
                success: true,
                data: respuesta.data
            });
        }).catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
}

exports.autenticate = async (req, res) => {
    const payload = {
        check: true
    };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: '1m'
    });
    res.json({
        message: 'Autenticación correcta',
        token: token
    });
}
