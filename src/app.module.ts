import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    MongooseModule.forRoot(`mongodb://db:27017/users`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
