import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { WhitelistMiddleware } from './middlewares/whitelist.middleware';
import { WalletsModule } from './wallets/wallets.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from '@nestjs/config';
import { ApiDataModule } from './apiConfig/api-etherscan.module';
import { ExchangeRateModule } from './exchange-rate/exchange-rate.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3307,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    
    }),
    WalletsModule,
    ExchangeRateModule,
    ApiDataModule
],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(WhitelistMiddleware).forRoutes('*');
  }
}