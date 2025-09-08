import * as http from "node:http";
import { env } from "node:process";
import * as dotenv from 'dotenv';
import * as url from "node:url"
import * as path from "node:path"
import * as fs from "fs/promises"

dotenv.config();

const PORT = process.env.PORT || 3000;
const LOCALHOST = process.env.LOCALHOST!;

const server = http.createServer( async(req,res)=>{
    // console.log("URL: "+ req.url);
    // console.log(`Kérés fejléce: ${req.headers}`);
    
    // Statikus állomány (most az idnex.html) útvonala
    const __filename = url.fileURLToPath(import.meta.url)
    //console.log(__filename);
    const __dirname = path.dirname(__filename);
    const indexPath = path.join(__dirname, "index.html")
    //console.log(__dirname);
    //onsole.log(indexPath);



    /* res.statusCode = 200;
    res.setHeader("Content-Type","application/json");
    res.write("Ez egy TISZÁS http server üzenete! Éljen a rendszerváltás!!! ❤️🤍💚\n")
    res.end("Ruszkik haza!"); */

    const html = await fs.readFile(indexPath)
    if(req.url === "/" && req.method === "GET"){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end(html);
    }else{
        res.statusCode = 404;
        res.end("Page not found!")
    }
})

server.listen(PORT,()=>{
    console.log(`The server is running on http://${LOCALHOST}:${PORT}`);
    console.log("Áradjon a TISZA! ❤️ 🤍💚 ");
})