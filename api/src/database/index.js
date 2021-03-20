import * as settings from "../settings";

const {Sequelize} = require('sequelize');
const connection = new Sequelize(settings.databaseName, settings.databaseUser, settings.databasePass,
    {
        host: settings.databaseHost,
        port: settings.databasePort,
        dialect: 'postgres'
    });

const definitions = require('./definitions');
const models = {};
for(const name in definitions) {
    models[name] = connection.define(name, definitions[name], {
        freezeTableName: true, version: true
    });
}

models["Customer"].belongsTo(models["Status"],{targetKey: 'id', foreignKey: 'statusId'});
models["Customer"].hasMany(models["Note"],{targetKey: 'id', foreignKey: 'customerId'});

module.exports = {
    connection, models
};
