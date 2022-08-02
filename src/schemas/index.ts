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

/* (async()=>{
    try{
        await db.sync()
    }catch(e){
        console.log(e)
    }
})(); */