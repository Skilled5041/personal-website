"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visit_count = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
exports.visit_count = (0, pg_core_1.pgTable)("visit_count", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    date: (0, pg_core_1.date)("date").notNull()
});
