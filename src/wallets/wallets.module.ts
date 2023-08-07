import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallets } from './entities/wallet.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Wallets])],
  controllers: [WalletsController],
  providers: [WalletsService]
})
export class WalletsModule {}
