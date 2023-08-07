import { Module } from '@nestjs/common';
import { WalletsModule } from './wallets/wallets.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
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
    WalletsModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
