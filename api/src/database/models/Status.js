module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Status', {
        // Model attributes are defined here
        statusName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        //Options
    });
}
