import {sequelize} from '../db/database';
import {DataTypes} from 'sequelize';
import {Workpackage} from './Workpackage';


export const Project = sequelize.define(
  "projects",
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
  },
  {
    timestamps: true,
  }
);

Project.hasMany(Workpackage, {
  foreignKey: "projectId",
  sourceKey: "id",
});

Workpackage.belongsTo(Project, {
  foreignKey: "projectId",
  targetKey: "id"
});
