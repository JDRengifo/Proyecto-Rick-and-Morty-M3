const users = require('../utils/users')

const login = async (req, res) => {
// forma 1
// const email = req.query.email;
// const password = req.query.password;

// forma 2
const { email, password } = req.query;

const user = users.find(user => 
    user.email === email && 
    user.password === password
    );

if(user) {
    return res.json({ access: true });
} else {
    return res.status(200).json({ access: false });
}

};
module.exports =  login;