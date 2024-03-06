const { json } = require("express");
const { Favorite } = require("../DB_connection");

// let myFavorites = [];

const postFav = async (req, res) => {
    const { id, name, gender, species, image, status, onClose } = req.body;
    // const character = { id, name, gender, species, image, status, onClose };
    try {
        if(id && name && gender && species && image && status){
            await Favorite.findOrCreate({where: {id, name, gender, species, image, status}})
            const myFavorites = await Favorite.findAll();
            res.json(myFavorites);
        } else {
            res.status(401).send('Faltan datos')
        }
        
    } catch (error) {res.status(500).send(error.message)
        
    }
    
}

const deleteFav = async (req, res) => {
    const { id } = req.params;
   try {
       await Favorite.destroy({where: {id}})
       
       const myFavorites = await Favorite.findAll();
       res.json(myFavorites);
    } catch (error) {res.status(500).send(error.message)
    
   } 
};

module.exports = { postFav, deleteFav };