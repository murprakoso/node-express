import mongoose from 'mongoose';
// const GeneralSchema = new mongoose.Schema;

const GeneralSchema = new mongoose.Schema({}, { strict: false });
const General = mongoose.model('General', GeneralSchema, 'general');

export default General;
