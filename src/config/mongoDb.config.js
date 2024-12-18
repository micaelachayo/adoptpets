import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
export const connectMongoDB = async () => {
  try {
    const mongoURL = process.env.MONGO_URL;  // Asegúrate de que esto esté definido
    if (!mongoURL) {
      throw new Error('MONGO_URL no está definida en el archivo .env');
    }
    await mongoose.connect(mongoURL, { dbName: process.env.DB_NAME });
    console.log('Mongo DB conectado');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
};
