const http = require("http");

const server = http.createServer((request,response)=>{
    /* 
    Basic Database Operation
    GET==> select * from table_name;
    POST=> insert data_ into table_name;
    PUT==> update something from table_Name where Condition;
    Delete=> Delete 
    */

    if(request.url==="/description"){
        if(request.method==="GET"){
            console.log("Select * from table");
        }else if(request.method==="POST"){
            console.log("Insert into table");
        } else if(request.method==="PUT"){
            console.log("Update...");
        } else{
            console.log("Delete...");
        }
    }

    if(request.url==="/description2"){
        if(request.method==="GET"){
            console.log("Select * from table");
        }else if(request.method==="POST"){
            console.log("Insert into table");
        } else if(request.method==="PUT"){
            console.log("Update...");
        } else{
            console.log("Delete...");
        }
    }
    response.setHeader("Content-Type","applicaiton/json");
    response.end('request processed')
})

server.listen(3000,'0.0.0.0',()=>{
    console.log("server started on port 3000");
})