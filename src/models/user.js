"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    verify: DataTypes.INTEGER
  });

  User.associate = function(models) {
    // associations can be defined here
  };

  return User;
};
