import type {ModelAttributes} from 'sequelize';
import {DataType, Model} from 'sequelize-typescript';
import {sequelize} from '../../db/database';

interface IUser {
  id: number | undefined;
}

const userModel: ModelAttributes<Model, IUser>= {
  id: {
    type: DataType.NUMBER,
  },
};

export const User = sequelize.define("User", userModel, {});
