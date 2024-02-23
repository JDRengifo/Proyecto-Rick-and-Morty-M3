const axios = require('axios');
const URL = "http://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
  // const {id} = req.params; ó así
  const ID = req.params.id;
  try {
    const response = await axios.get(`${URL}${ID}`);
    if (response.data.id) {
      const { id, name, gender, species, origin, image, status } = response.data;

      const character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };
      res.status(200).json(character);
    } else {
      res.status(404).json({ message: 'Not found' });
      console.log(res.status)
    }


  } catch (error){
    return res.status(500).json({ message: error.message })
  }
  }
  module.exports = getCharById;

// const getCharById =(res, ID)=>{
//   axios.get(`${URL}${ID}`)
//     .then(({data}) =>{
//     const {id, name, status, species, origin, gender,image} = data;
//     const character = {id, name, gender, species, origin, image, status};
//         console.log(character)
//      return res.write(JSON.stringify(character));
//       })
//       .catch((err)=>{
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         return res.end(err.message);
//       })
// };

 // module.exports = getCharById
