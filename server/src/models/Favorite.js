const { DataTypes, INTEGER } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
      },
      name: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false,
      },
      status: {
         type: DataTypes.ENUM("Alive", "Dead", "Unknow"),
         defaultValue: "Alive",
         allowNull: false,
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      gender:{
         type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
         allowNull: false,
      },
      image:{
         type: DataTypes.STRING,
         allowNull: false,
      }
   }, 
   { timestamps: false });
};
