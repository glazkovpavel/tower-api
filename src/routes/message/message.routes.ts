import {Router} from 'express';
import {createMessage} from '../../controllers/comment/message.controller';

export const messageRoutes = (router: Router) => {
  const messageRouter: Router = Router();

  messageRouter
    .post('/', createMessage)
    //.get('/', )

  router.use('/message', messageRouter);
};
