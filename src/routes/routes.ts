import {Router} from 'express';
import {themesRoutes} from './theme/theme.routes';

const router: Router = Router();


themesRoutes(router);


export default router;
