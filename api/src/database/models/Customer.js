module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Customer', {
        // Model attributes are defined here
        statusId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        identifier: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNum: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emailAdd: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        //Options
    });
};
