import { Router } from 'express';

import userRouter, { p as userPaths } from './user-router';


// Init
const apiRouter = Router();

// Add api routes
apiRouter.use(userPaths.basePath, userRouter);


// **** Export default **** //

export default apiRouter;
