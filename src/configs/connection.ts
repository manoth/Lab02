import { knex } from 'knex';

export class Connection {
    db() {
        return knex({
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