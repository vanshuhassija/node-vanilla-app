//welcome ----> 200 ---> plain Text ---> Welcome to Dominos
//contact ----> 200 ----> Json Response ---> {name: "Dominos", address: "Bangalore",contact:"9876543210"}

//1. Send the Status Copde
//2. Send the headers
//3. Send the body of resp

const { response } = require("express");
const http=require("http");

const server=http.createServer((req,res)=>{
   if(req.url.startsWith("/welcome")){
    //    res.writeHead(statusCode,headersObject)
       res.writeHead(200,{
              "Content-Type":"text/plain"
       })
       //writeHead is a mehod of response object which is used to
       // send the status code and the headers
       res.end("Welcome to Dominos");
   }

   if(req.url.startsWith("/contact")){
         res.writeHead(200,{
              "Content-Type":"application/json"
         })
         res.end(JSON.stringify({
              name:"Dominos",
              address:"Bangalore",
              contact:"9876543210"
         }));
   }


   res.writeHead(404);
   res.end("Page Not Found");

    // res.end("Welcome to Dominos");
    //res.end ----> Terminates the response and sends the response to the client with a message.
})

server.listen(8080,()=>{
    console.log("Server Started on 8080");
})