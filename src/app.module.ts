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
      host: 'localhost',
      port: 3307,
      username: 'djs',
      password: 'root',
      database: 'wallet_db',
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