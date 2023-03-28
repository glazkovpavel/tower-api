import {Router} from 'express';
import {createMessage, getAllMessagesByTopicId} from '../../controllers/comment/message.controller';

export const messageRoutes = (router: Router) => {
  const messageRouter: Router = Router();

  messageRouter
    .post('/', createMessage)
    .get('/topic/:id', getAllMessagesByTopicId)

  router.use('/message', messageRouter);
};
