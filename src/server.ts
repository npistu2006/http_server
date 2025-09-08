import * as http from "node:http";


const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","application/json");
    res.write("Ez egy TISZÁS http server üzenete! Éljen a rendszerváltás!!!\n")
    res.end("hELLO");

})

server.listen(3000,()=>{
    console.log("Áradjon a TISZA! ❤️🤍💚 ");
})