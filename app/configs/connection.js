"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const knex_1 = require("knex");
class Connection {
    db() {
        return (0, knex_1.knex)({
            client: 'mysql',
            connection: {
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
                charset: process.env.DB_CHARSET,
                timezone: 'UTC'
            },
            pool: {
                min: 0,
                max: 7,
                afterCreate: (conn, done) => {
                    conn.query('SET NAMES utf8', (err) => {
                        done(err, conn);
                    });
                }
            },
            debug: true,
            acquireConnectionTimeout: 10000
        });
    }
}
exports.Connection = Connection;
//# sourceMappingURL=connection.js.map