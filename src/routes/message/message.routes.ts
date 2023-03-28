import {Router} from 'express';
import {createMessage, getAllMessagesByTopicId, likeMessage} from '../../controllers/comment/message.controller';

export const messageRoutes = (router: Router) => {
  const messageRouter: Router = Router();

  messageRouter
    .post('/', createMessage)
    .post('/like/:id', likeMessage)
    .get('/topic/:id', getAllMessagesByTopicId)

  router.use('/message', messageRouter);
};
