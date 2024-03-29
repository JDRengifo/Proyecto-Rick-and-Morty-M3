require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorite");
// const User = require('./models/User');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.
//! console.log({ DB_USER, DB_PASSWORD, DB_HOST })

const URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`
const sequelize = new Sequelize(
 URL, { logging: false, native: false }
);
// sequelize.sync({ force: true});
// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//
UserModel(sequelize);
FavoriteModel(sequelize);
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
