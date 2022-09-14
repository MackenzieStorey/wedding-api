import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize(
    process.env.DATABASE_NAME, 
    process.env.DATABASE_USERNAME, 
    process.env.DATABASE_PASSWORD, {
        host: process.env.DATABASE_ENDPOINT,
        dialect: 'mysql'
    });

export const people = sequelize.define('people', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    inviteCode: {
        type: DataTypes.STRING(4)
    },
    name: {
        type: DataTypes.STRING(50)
    },
    isComing: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    maxComing: {
        type: DataTypes.INTEGER(1)
    },
    countComing: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    dietaryRestrictions: {
        type: DataTypes.STRING(255)
    },
    songRequests: {
        type: DataTypes.STRING(255)
    }
}, {
    tableName: 'people'
});