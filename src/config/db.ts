
import { Sequelize } from "sequelize";
import { enviroment } from "./varEntorno";


const { DBNAME, DBPASSWORD, DBURL, DBUSER } = enviroment;

const dbName:string = String( DBNAME );
const dbUser:string = String( DBUSER );
const dbPassword:string = String( DBPASSWORD );
const dbUrl:string = String( DBURL );



export const db = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbUrl,
    dialect: 'mssql'
});