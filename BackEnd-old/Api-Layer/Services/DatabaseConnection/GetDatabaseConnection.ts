//packages
import  mysql from "mysql";

//Conncection to Database
const connection = mysql.createConnection({

    multipleStatements: true,
    host: 'localhost',
    user: 'root',
    password: "",
    database: "gamehighlitsdb"
});

export default connection
