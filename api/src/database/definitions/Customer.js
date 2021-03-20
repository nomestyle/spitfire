const DataTypes = require('sequelize');

module.exports = {
    statusId: DataTypes.INTEGER,
    identifier: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
    emailAdd: DataTypes.STRING
};
