/* eslint-disable simple-import-sort/imports */
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import AuthModule from './auth/auth.module';
import UserModule from './user/user.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../client/dist'),
    }),
    AuthModule,
    UserModule
  ],
})
class AppModule {}

export default AppModule;
