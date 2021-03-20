module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Note', {
        // Model attributes are defined here
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        noteContent: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, {
        //Options
    });
}

