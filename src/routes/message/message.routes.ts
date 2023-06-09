import {Router} from 'express';
import {
  createMessage,
  dislikeMessage,
  getAllMessagesByTopicId,
  likeMessage
} from '../../controllers/comment/message.controller';

export const messageRoutes = (router: Router) => {
  const messageRouter: Router = Router();

  messageRouter
    .post('/', createMessage)
    .post('/like/:id', likeMessage)
    .post('/dislike/:id', dislikeMessage)
    .get('/topic/:id', getAllMessagesByTopicId)

  router.use('/message', messageRouter);
};
