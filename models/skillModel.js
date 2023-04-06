import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({}, { strict: false });
const Skill = mongoose.model('Skill', SkillSchema, 'skills');

export default Skill;
