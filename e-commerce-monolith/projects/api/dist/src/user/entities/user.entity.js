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
const client_1 = require("@prisma/client");
class User {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The id of the user',
        example: 'ckm9q7m4f0000kzr3y6z8z6xh',
    }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The name of the user',
        example: 'John',
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The last name of the user',
        example: 'Doe',
    }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The email of the user',
        example: 'john.doe@gmail.com',
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The password of the user',
        example: 'ABadf#123',
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        enum: client_1.Role,
        description: 'The role of the user',
        example: 'ADMIN',
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Date',
        description: 'The date when the user was created',
        example: '2021-02-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Date',
        description: 'The date when the user was updated',
        example: '2021-02-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The penalty of the user',
    }),
    __metadata("design:type", Object)
], User.prototype, "penalty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The wish list of the user',
    }),
    __metadata("design:type", Object)
], User.prototype, "wishList", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        isArray: true,
        description: 'The purchases of the user',
    }),
    __metadata("design:type", Array)
], User.prototype, "purchases", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        isArray: true,
        description: 'The users products of the user',
    }),
    __metadata("design:type", Array)
], User.prototype, "usersProducts", void 0);
exports.default = User;
//# sourceMappingURL=user.entity.js.map