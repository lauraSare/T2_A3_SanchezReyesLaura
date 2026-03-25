const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://laura_db_user:cR0WO3Ezmx9DrI84@ac-1dxvsfe-shard-00-00.3dbmynr.mongodb.net:27017,ac-1dxvsfe-shard-00-01.3dbmynr.mongodb.net:27017,ac-1dxvsfe-shard-00-02.3dbmynr.mongodb.net:27017/?ssl=true&replicaSet=atlas-z33uby-shard-0&authSource=admin&appName=Cluster0');
        console.log('Conexion EXITOSA a MongoDB');
    } catch (error) {
        console.error('Error de conexion a MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;