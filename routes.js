import { Router } from 'express';
import response from './response.js';
import generalRoute from './routes/generalRoute.js';
import projectRoute from './routes/projectRoute.js';
import skillRoute from './routes/skillRoute.js';

const router = Router();

router.use('/api/general', generalRoute);
router.use('/api/projects', projectRoute);
router.use('/api/skills', skillRoute);

router.all('*', (req, res) => {
  response(res, 404, false, 'The requested url cannot be found.');
});

export default router;
