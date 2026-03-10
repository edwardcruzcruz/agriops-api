import bcrypt from "bcrypt"
import { User } from "../models/user.model"
import { generateToken } from "../utils/jwt";
import { AppError } from "../utils/AppError";
import { UserRepository } from "../repositories/user.repository";

export class AuthService {
    private userRepository = new UserRepository();

    async register(email: string, password: string){
        const hashed = await bcrypt.hash(password,10)

        const user:User = {
            id: crypto.randomUUID(),
            email,
            password: hashed
        }
        this.userRepository.create(user);

        return { id: user.id, email: user.email}
    }

    async login(email: string, password: string){
        const user = this.userRepository.findByEmail(email);
        if(!user) throw new AppError("Invalid credentials",401);
        const match = await bcrypt.compare(password,user.password);
        if(!match) throw new AppError("Invalid credentials",401);

        const token = generateToken({id: user.id, email: user.email});

        return {token};
    }
}