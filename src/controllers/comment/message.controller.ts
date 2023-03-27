import type {Request, Response} from 'express';
import {CommentsModel} from '../../models/forum/comments.model';

export const createMessage = async (req: Request, res: Response) => {
  const { message, topicId, ownerId } = req.body;
  try {
    const messageRes = await CommentsModel.create({
      message,
      topicId,
      ownerId
    });

    return res.json(messageRes);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
