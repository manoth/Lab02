'use strict';

import * as express from 'express';
const router = express.Router();

import { Member } from '../models/member';
const member = new Member();

router.post('/', (req, res, next) => {
    let db = req.db;
    let data = req.body;
    member.add(db, data).then((result) => {
        res.json({ ok: true, message: 'บันทึกข้อมูลสำเร็จ.' })
    }).catch((err) => {
        res.json({ ok: false, message: err.message });
    });
});

router.put('/:id', (req, res, next) => {
    let db = req.db;
    let id = req.params.id;
    let data = req.body;
    member.update(db, data, id).then((result) => {
        res.json({ ok: true, message: 'แก้ไขข้อมูลสำเร็จ.' })
    }).catch((err) => {
        res.json({ ok: false, message: err.message });
    });
});

router.delete('/:id', (req, res, next) => {
    let db = req.db;
    let id = req.params.id;
    member.del(db, id).then((result) => {
        res.json({ ok: true, message: 'ลบข้อมูลสำเร็จ.' })
    }).catch((err) => {
        res.json({ ok: false, message: err.message });
    });
});

router.get('/:id', (req, res, next) => {
    let db = req.db;
    let id = req.params.id;
    member.getDataById(db, id).then((row) => {
        res.json({ ok: true, data: row })
    }).catch((err) => {
        res.json({ ok: false, message: err.message });
    });
});

router.get('/', (req, res, next) => {
    let db = req.db;
    member.getDataAll(db).then((row) => {
        res.json({ ok: true, data: row })
    }).catch((err) => {
        res.json({ ok: false, message: err.message });
    });
});

export default router;