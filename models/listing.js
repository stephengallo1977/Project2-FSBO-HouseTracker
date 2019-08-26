//This returns the house search info in mysql
module.exports = function (sequelize, DataTypes) {
    var listing = sequelize.define("Listing", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            default: true
        }
    })
    return listing;
}