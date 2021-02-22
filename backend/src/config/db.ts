import mongoose from 'mongoose';

mongoose.connect(
  'URI',
  {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  },
  () => {
    console.log('MongoDB connected');
  }
);
