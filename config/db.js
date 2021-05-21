const Sequelize = require('sequelize') ;

const sequelize = new Sequelize(
    
    `${process.env.SCHEME_NAME}`,
    `${process.env.USER}`,
    `${process.env.PASSWORD}`,
    {
        dialect : 'mysql',
        host : 'localhost'
    }
) ;

module.exports = sequelize;
