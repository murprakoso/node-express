import { Router } from 'express';
import response from '../response.js';
import Skill from '../models/skillModel.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find().sort({ _id: -1 });

    response(res, 200, true, '', skills);
  } catch (error) {
    response(res, 500, false, error.message);
  }
});

export default router;
