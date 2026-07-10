import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

console.log("MYSQL CONFIG:");
console.log("HOST:", process.env.DB_HOST);
console.log("USER:", process.env.DB_USER);
console.log("DATABASE:", process.env.DB_NAME);


const db = mysql.createConnection({

    host: process.env.DB_HOST,

    user: process.env.DB_USER,

    password: process.env.DB_PASSWORD,

    database: process.env.DB_NAME

});


db.connect((err)=>{

    if(err){
        console.log("❌ MySQL Connection Failed");
        console.log(err);
        return;
    }

    console.log("✅ MySQL Connected");

});


export default db;