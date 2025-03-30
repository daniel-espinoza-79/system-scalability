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
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let ProductPublisherService = class ProductPublisherService {
    async publishProductCreated(product) {
        this.client.emit('product.created', product);
    }
    async publishProductUpdated(product) {
        this.client.emit('product.updated', product);
    }
    async publishProductDeleted(id) {
        this.client.emit('product.deleted', { id });
    }
    async publishNewStockUpdate(items) {
        this.client.emit('product.stock-updated', items);
    }
    publishUpdates(arg0) {
        this.client.emit('order.completed', arg0);
    }
};
__decorate([
    (0, microservices_1.Client)({ transport: microservices_1.Transport.NATS, options: { servers: ['nats://localhost:4222'] } }),
    __metadata("design:type", microservices_1.ClientNats)
], ProductPublisherService.prototype, "client", void 0);
ProductPublisherService = __decorate([
    (0, common_1.Injectable)()
], ProductPublisherService);
exports.default = ProductPublisherService;
//# sourceMappingURL=product-events.publisher.js.map