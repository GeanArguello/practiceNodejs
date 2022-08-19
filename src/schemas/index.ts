import { db } from "../config/db";
import { DataTypes } from "sequelize";


export const Users = db.define('users',{
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        // allowNull defaults to true
    },
    userName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    email: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    age: {
        type: DataTypes.INTEGER,
        // allowNull defaults to true
    },
    country: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
},
{
    //tableName: 'IDP_Sessions',
    timestamps: true,
    // If don't want createdAt
    createdAt: true,
    // If don't want updatedAt
    updatedAt: true,
},
);

export const UserJWT = db.define(
    'userJWT',
    {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
            // allowNull defaults to true
        },
        userName: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        email: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        password: {
            type: DataTypes.STRING
        }
    },
    {
        //tableName: 'IDP_Sessions',
        timestamps: true,
        // If don't want createdAt
        createdAt: true,
        // If don't want updatedAt
        updatedAt: true,
    },
);





//Sincronizar tabla con db
/* (async()=>{
    try{
        await UserJWT.sync()
    }catch(e){
        console.log(e)
    }
})(); */