import {sequelize} from '../../db/database';
import {DataTypes} from 'sequelize';

export const TopicModel = sequelize.define(
  "topic",
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
    ownerId: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
  }
);
