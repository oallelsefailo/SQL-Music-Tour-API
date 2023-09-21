'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
Event.init(
  {
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
    },
    start_time: {
      type: DataTypes.TIME,
    },
    end_time: {
      type: DataTypes.TIME,
    },
  },
  {
    sequelize,
    modelName: "Event",
    tableName: "event",
    timestamps: false,
  }
);
  return Event;
};