//This returns the house search info in mysql

module.exports = function (sequelize, DataTypes) {
    var house = sequelize.define("House", {
        address: {
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
        beds: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        baths: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1
        },
        favorite: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        }
    })
    return house;
}