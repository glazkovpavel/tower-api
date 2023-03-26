import {sequelize} from '../../db/database';
import {DataTypes} from 'sequelize';



export const UserTheme = sequelize.define(
  "user_theme",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    theme: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
