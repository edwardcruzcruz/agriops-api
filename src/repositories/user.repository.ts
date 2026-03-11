import db from "../data/database";
import { User } from "../models/user.model";

export class UserRepository {
    create(user: User) {
        const stmt = db.prepare(`
            INSERT INTO users (id, email, password)
            VALUES (?,?,?)
            `);

        stmt.run(user.id,user.email,user.password);
        
        return user;
    }

    findByEmail(email: string): User | undefined {
        const stmt = db.prepare(`
            SELECT * FROM users WHERE email = ?
        `);

        return stmt.get(email) as User | undefined
    }

    getAll(): User[] | undefined {
        const stmt = db.prepare(`
            SELECT * FROM users
        `);

        return stmt.all() as User[] | undefined
    }
}