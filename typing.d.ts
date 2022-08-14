import { Knex } from 'knex';

declare global {
    namespace Express {
        export interface Request {
            db: Knex;
        }
    }
}