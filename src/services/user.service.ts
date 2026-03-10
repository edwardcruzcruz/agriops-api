import { UserRepository } from "../repositories/user.repository";
import { AppError } from "../utils/AppError";

export class UserService {
    private userRepository = new UserRepository();
    async getUserByEmail(email: string){
        const user = this.userRepository.findByEmail(email);
        if(!user) throw new AppError("User not found",404);

        return {user};
    }
    async getUsers(){
        return this.userRepository.getAll();
    }
}