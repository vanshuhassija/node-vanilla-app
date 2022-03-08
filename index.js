//welcome ----> 200 ---> plain Text ---> Welcome to Dominos
//contact ----> 200 ----> Json Response ---> {name: "Dominos", address: "Bangalore",contact:"9876543210"}

//1. Send the Status Copde
//2. Send the headers
//3. Send the body of resp

const express= require("express");
const app= express();

//Define Routes in express
// app.method(path,callback)

//res.write() ---> accepts a string
//res.end() ---> ends the response
//res.writeHead() ---> accepts a status code and a json object

app.get("/welcome",(req,res)=>{
    // res.status(statusCode).send()

    res.status(200).send("Welcome to dominos");
    //res.send()----> Can Accept Any Type o param
    // res.writeHead() +    res.end()
    // res.write() + res.end()
})

app.get("/contact",(req,res)=>{
    // res.writeHead(200,{
    //     "Content-Type":"application/json"
    // })
    // res.end(JSON.stringify({
    //     name:"Dominos",
    //     address:"Bangalore",
    //     contact:"9876543210"
    // }))
    res.status(404).send({
        name:"Dominos",
        address:"Bangalore",
        contact:"9876543210"
    }
    )
})

app.get("*",(req,res)=>{
    res.writeHead(400,{
        "Content-Type":"text/html"
    })
    res.end("<h1>Not Found</h1>")
})

app.listen(8080,()=>{
    console.log("Started Server on 8080")
})




// const http=require("http");

// const server=http.createServer((req,res)=>{
//    if(req.url.startsWith("/welcome")){
//     //    res.writeHead(statusCode,headersObject)
//        res.writeHead(200,{
//               "Content-Type":"text/plain"
//        })
//        //writeHead is a mehod of response object which is used to
//        // send the status code and the headers
//        res.end("Welcome to Dominos");
//    }

//    if(req.url.startsWith("/contact")){
//          res.writeHead(200,{
//               "Content-Type":"application/json"
//          })
//          res.end(JSON.stringify({
//               name:"Dominos",
//               address:"Bangalore",
//               contact:"9876543210"
//          }));
//    }


//    res.writeHead(404);
//    res.end("Page Not Found");

//     // res.end("Welcome to Dominos");
//     //res.end ----> Terminates the response and sends the response to the client with a message.
// })

// server.listen(8080,()=>{
//     console.log("Server Started on 8080");
// })