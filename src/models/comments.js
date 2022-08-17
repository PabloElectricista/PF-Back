const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define("comments", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });
};
