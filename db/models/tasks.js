'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
     type: DataTypes.TEXT,
     defaultValue: "None"
    },
    limit: {
      type: DataTypes.DATE,
      defaultValue: "None"
     },
    done: {
      type: DataTypes.TEXT,
      defaultValue: "None"
     }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};