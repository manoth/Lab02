'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const member_1 = require("./member");
router.use('/member', member_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map