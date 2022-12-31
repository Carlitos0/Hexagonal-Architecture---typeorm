import { User } from "../domain/user";
import { UserRepository } from "../domain/user.reposittory";
import { UserGetAllDto } from "./dtos/user-get-all.dto";
import { UserEntity } from "./entities/user.entity";

export class UserInfraestructure implements UserRepository{
    insert(user: User): void {
        throw new Error("Method not implemented.");
    }
    getAll(): User[] {
        const results: UserEntity[] = [
            new UserEntity("John Eddy", "john.doe@correo.com", "123456", "IT"),
            new UserEntity("Jane Doe", "jane.doe@correo.com", "123456", "IT"),
            new UserEntity("John Smith","john.smith@correo.com","123456","Suply Chain"),
        ];
        return UserGetAllDto.fromDataToDomain(results);
    };
    
}