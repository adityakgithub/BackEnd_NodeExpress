const mySql = require("mysql");

function getProduct(){
    //1.1Create Connection 
        const connection = mySql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "ecommerce_db"
        })
    //1.2.Open Connection
    connection.connect((err) => {
        if (err) throw err;
    })

    //2.Create Database Query
    const statement =`select * from table_Name`
    //3.Execute the Query Created by Database
    //asynchronous execution
    connection.query(statement, (err, result) => {
        if(err) throw err;
        console.log(err);
        //4.Print the Result
        console.log(result);
    })
    //4.Process the Result

    //5.End Database Connection
    connection.end();
}