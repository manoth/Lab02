'use strict';

import * as express from 'express';
const router = express.Router();

import member from './member';

router.use('/member', member);

export default router;