import express from 'express'
import UserController from './user.controller';

class Router{
    router: express.Router
    userController: UserController

    constructor(){
        this.router = express.Router();
        this.userController = new UserController()
        this.endpoint()
    }

    endpoint(){
        this.router.route("/")
            .get(this.userController.getALl);
    }
}

export default new Router().router;