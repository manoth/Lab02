import { Knex } from "knex";

export class Member {
    add(db: Knex, data: object) {
        return db('member').insert(data);
    }
    update(db: Knex, data: object, id: any) {
        return db('member').update(data).where('id', id);
    }
    del(db: Knex, id: any) {
        return db('member').where('id', id).del();
    }
    getDataAll(db: Knex) {
        return db('member');
    }
    getDataById(db: Knex, id: any) {
        return db('member').where('id', id);
    }
}