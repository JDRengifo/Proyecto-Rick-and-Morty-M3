// const users = require('../utils/users')
const { User } = require('../../src/DB_connection')

const login = async (req, res) => {

const { email, password } = req.query;
// console.log({ email, password })
if(!email || !password || email.length  === 0 || password.length === 0){
    res.status(400).send('Faltan datos');
} else {
    try {
        const userFound = await User.findOne({
            where: {email: email}
        })
        // console.log(userFound)
       try {
           if(userFound.dataValues.password === password){
               res.status(200).json({access: true});
           } else {
               res.status(403).send('Contraseña incorrecta')
           }
        
       } catch (error) {
        res.status(500).send(error.message)
       } 

    } catch (error) {
        res.status(404).send('Usuario no encontrado')
    }
}

};
module.exports =  login;