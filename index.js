import express from 'express';
import userRoutes from './routes/UserRoute.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuration des routes
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
