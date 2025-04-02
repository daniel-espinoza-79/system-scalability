"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const constants_1 = require("../../utils/constants");
const AdminAccess = () => (0, common_1.SetMetadata)(constants_1.ADMIN_KEY, client_1.Role.ADMIN);
exports.default = AdminAccess;
//# sourceMappingURL=admin.decorator.js.map