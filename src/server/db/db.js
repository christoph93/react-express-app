import mongoose from 'mongoose';

global.db = mongoose.createConnection('mongodb://localhost/react-app');
