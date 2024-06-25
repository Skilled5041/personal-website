"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var migrator_1 = require("drizzle-orm/mysql2/migrator");
var db_1 = require("./db");
await (0, migrator_1.migrate)(db_1.db, { migrationsFolder: "../drizzle" });
await db_1.connection.end();
