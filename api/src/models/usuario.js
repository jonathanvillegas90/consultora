const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    const Usuario = sequelize.define('usuario', {
        eMail: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
    });

};