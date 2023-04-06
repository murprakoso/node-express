import { Router } from 'express';
import response from '../response.js';
import Project from '../models/projectModel.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ _id: -1 });

    response(res, 200, true, '', projects);
  } catch (error) {
    response(res, 500, false, error.message);
  }
});

export default router;
