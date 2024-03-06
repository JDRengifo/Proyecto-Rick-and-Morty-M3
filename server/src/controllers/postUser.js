const { User }= require('../DB_connection');

const postUser = async (req, res)=> {
    const {email, password} = req.body;
    if(!email || !password || password.length===0 || email === 0){
        res.status(400).send('faltan datos')
    } else {
        try {
            const newUser = await User.findOrCreate({
                where: {email, password},
            })
            return res.status(200).json(newUser);
            
        } catch (error) {res.status(500).send(error.message);
            
        }
    }
};

module.exports = postUser;
