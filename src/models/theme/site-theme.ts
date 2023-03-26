import {sequelize} from '../../db/database';
import {DataTypes} from 'sequelize';

export const SiteTheme = sequelize.define(
  "site_theme",
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
    userId: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
  }
);
