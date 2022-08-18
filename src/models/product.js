const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

  sequelize.define("product", {
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
      type: DataTypes.ENUM("percussion", "wind", "electrophones", "idiophones"),
      allowNull: false,
    },
    photos: {
      type: DataTypes.ARRAY(DataTypes.BLOB('long')),
    },
    new: {  // condition
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    summary: {
        type: DataTypes.STRING
    },
    quantity: { // stock
        type: DataTypes.INTEGER
    }, 
    color: {
        type: DataTypes.STRING
    },
    comments: {
        type: DataTypes.TEXT
    }
  });
};
