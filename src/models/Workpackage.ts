import {sequelize} from '../db/database';
import {DataTypes} from 'sequelize';


export const Workpackage = sequelize.define(
  "workpackages",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    checked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);
