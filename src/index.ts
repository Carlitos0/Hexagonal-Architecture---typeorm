import http from 'http'
import app from './app'

const server = http.createServer(app);

server
    .listen(app.get("port"))
    .on("listening", () => {
        console.log(`Server on port ${app.get("port")}`);
    })
    .on("error", err => console.log(err));