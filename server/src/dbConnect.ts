
import mongoose from 'mongoose';
import config from './config.js';
import { createError } from './utils/index.js';

export default () => mongoose.connect(config.db || '', {dbName: ''}).catch(() => createError('DB connection Error', 500));
