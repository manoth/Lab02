"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
class Member {
    add(db, data) {
        return db('member').insert(data);
    }
    update(db, data, id) {
        return db('member').update(data).where('id', id);
    }
    del(db, id) {
        return db('member').where('id', id).del();
    }
    getDataAll(db) {
        return db('member');
    }
    getDataById(db, id) {
        return db('member').where('id', id);
    }
}
exports.Member = Member;
//# sourceMappingURL=member.js.map