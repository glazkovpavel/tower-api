import {sequelize} from '../../db/database';
import {DataTypes} from 'sequelize';

export const CommentsModel = sequelize.define(
  "comments",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    message: {
      type: DataTypes.STRING,
    },
    topicId: {
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
