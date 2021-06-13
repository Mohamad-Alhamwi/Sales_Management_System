const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Salesperson = sequelize.define(
    'salesperson',
    {
        salesperson_id:
        {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        first_name: 
        {
            type:  Sequelize.STRING,
            allowNull: false           
        },
        last_name:
        {
            type:  Sequelize.STRING,
            allowNull: false
        },
        email:
        {
            type:  Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password:
        {
            type:  Sequelize.STRING,
            allowNull: false
        },
        gender:
        {
            type:  Sequelize.STRING,
            allowNull: true
        },
        phone_number:
        {
            type:  Sequelize.STRING,
            allowNull: true,
            unique: true
        },
        birth_date:
        {
            type:  Sequelize.DATE,
            allowNull: true
        },
        country:
        {
            type:  Sequelize.STRING,
            allowNull: true
        },
        city:
        {
            type:  Sequelize.STRING,
            allowNull: true
        },
        town:
        {
            type:  Sequelize.STRING,
            allowNull: true
        },
        postal_code:
        {
            type:  Sequelize.STRING,
            allowNull: true
        },
        img:
        {
            type:  Sequelize.BLOB,
            allowNull: true
        }
    },
    {
        freezeTableName: true
    }
);

module.exports = Salesperson;