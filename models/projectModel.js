import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({}, { strict: false });
const Project = mongoose.model('Project', ProjectSchema, 'projects');

export default Project;
