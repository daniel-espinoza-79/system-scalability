"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const cors_config_1 = require("./config/cors.config");
const constants_1 = require("./utils/constants");
async function main() {
    const app = await core_1.NestFactory.create(app_module_1.default, {
        snapshot: true,
    });
    app.connectMicroservice({
        transport: microservices_1.Transport.NATS,
        options: {
            servers: ['nats://localhost:4222'],
        },
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
    app.enableCors(cors_config_1.default);
    app.setGlobalPrefix(constants_1.PREFIX);
    if (constants_1.ENV === 'development' || constants_1.ENV === 'testing' || constants_1.ENV === 'staging') {
        const config = new swagger_1.DocumentBuilder()
            .setTitle(constants_1.TITLE)
            .setDescription(constants_1.DESCRIPTION)
            .setVersion(constants_1.VERSION)
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup(constants_1.PREFIX, app, document);
    }
    await app.startAllMicroservices();
    await app.listen(3111);
}
main().catch((err) => {
    throw new Error(err.message);
});
//# sourceMappingURL=main.js.map