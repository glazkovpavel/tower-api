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

export const getAllMessagesByTopicId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const messages = await CommentsModel.findAll({
      where: {
        topicId: id
      }
    });

    return res.json(messages);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });

  }
}
