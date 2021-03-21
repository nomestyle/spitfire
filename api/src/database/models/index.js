import * as settings from "../../settings";

const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(__filename);
const Sequelize = require('sequelize');
const sequelize = new Sequelize(settings.databaseName, settings.databaseUser, settings.databasePass,
    {
        host: settings.databaseHost,
        port: settings.databasePort,
        dialect: 'postgres'
    });
const db        = {};

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) &&
            (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
