const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define("users", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM("buyer/seller", "visitor", "admin"),
            allowNull: false,
        },
        cart: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        buyHistory: {
            type: DataTypes.ARRAY(DataTypes.STRING), 
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        salesHistory: {
            type: DataTypes.ARRAY(DataTypes.STRING), 
            allowNull: false
        },
        location: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    });
};
