module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define("producto", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primarykey: true,
      type: DataTypes,
      INTEGER,
    },
    nombre: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    precio: {
      type: DataTypes.INTEGER,
    },
  });
  return Producto
};
