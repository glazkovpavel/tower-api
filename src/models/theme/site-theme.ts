import {sequelize} from '../../db/database';
import {DataTypes} from 'sequelize';
import {UserTheme} from './user-theme';

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
  },
  {
    timestamps: false,
  }
);


SiteTheme.hasMany(UserTheme, {
  foreignKey: "userId",
  sourceKey: "id",
});

UserTheme.belongsTo(SiteTheme, {
  foreignKey: "userId",
  targetKey: "id"
});
