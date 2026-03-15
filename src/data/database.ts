import Database from "better-sqlite3";

const dbFile = process.env.DB_FILE || "database.db";

const db = new Database(dbFile);
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    );
`);
export default db;