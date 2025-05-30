"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../user/entities/user.entity");
class Auth {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'JWT token',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXCVI9',
    }),
    __metadata("design:type", String)
], Auth.prototype, "token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'Refresh token',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXCVI9',
    }),
    __metadata("design:type", String)
], Auth.prototype, "refreshToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: user_entity_1.default,
        description: 'The user that was authenticated',
    }),
    __metadata("design:type", user_entity_1.default)
], Auth.prototype, "user", void 0);
exports.default = Auth;
//# sourceMappingURL=auth.entity.js.map