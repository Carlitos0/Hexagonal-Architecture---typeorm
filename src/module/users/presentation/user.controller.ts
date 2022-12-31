import { Request, Response } from "express";
import { UserApplication } from "../application/user.application";
import { UserRepository } from "../domain/user.reposittory";
import { UserInfraestructure } from "../infraestructure/user.infraestructure";


const userInfraestructure: UserRepository = new UserInfraestructure();
const userApplication: UserApplication = new UserApplication(userInfraestructure);
export default class UserController{
    constructor(){
        this.getALl = this.getALl.bind(this)
    }
    mockUsers(){
        return [
            {
                name: "eddy"
            },
            {
                name: "jordan"
            },
        ]
    }

    getALl(req: Request, res: Response){
        res.json(userApplication.getAll());
    }
}

