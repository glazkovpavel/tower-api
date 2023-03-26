import {sequelize} from '../../db/database';
import {DataTypes} from 'sequelize';



export const UserTheme = sequelize.define(
  "user_theme",
  {
    themeId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },
  {
    timestamps: false,
  }
);
