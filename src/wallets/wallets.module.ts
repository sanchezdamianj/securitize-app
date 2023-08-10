import { Module } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { WalletsController } from './wallets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallets } from './entities/wallet.entity';
import { ApiDataModule } from '../apiConfig/api-etherscan.module';


@Module({
  imports:[TypeOrmModule.forFeature([Wallets]), ApiDataModule],
  controllers: [WalletsController],
  providers: [WalletsService]
})
export class WalletsModule {}
