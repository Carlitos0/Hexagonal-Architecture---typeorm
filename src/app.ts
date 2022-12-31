import express ,{ Application, Router } from "express";
import Route from "./module/users/presentation/user.routes"

class App{
    readonly app: Application
    userRoutes: typeof Route
    constructor(){
        this.app = express();
        this.userRoutes = Route
        this.settings();
    }

    settings(){
        this.app.set("port", process.env.PORT || 4500);
        this.app.use("/users", this.userRoutes);
    }
}

export default new App().app;