import { Sequelize } from "sequelize";

// Création d'une instance Sequelize pour la connexion à la base de données
const db = new Sequelize('mydatabase', 'abstract-programmer', 'issat2020', {
    host: 'localhost',
    dialect: 'mysql'
});

// Exportation de l'instance Sequelize
export default db;
