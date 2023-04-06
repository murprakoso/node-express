import { Router } from 'express';
import response from '../response.js';
import General from '../models/generalModel.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const general = await General.findById('642efb4b724d092945ce4a13');

    response(res, 200, true, '', general);
  } catch (error) {
    response(res, 500, false, error.message);
  }
});

export default router;
