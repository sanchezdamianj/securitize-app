import { ApiService } from './../apiConfig/api-data.service';
import { Controller, Get, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService, private readonly apiService: ApiService) {}

  @Put()
  create(@Body() createWalletDto: CreateWalletDto) {
      return this.walletsService.create(createWalletDto);
    }

  @Get()
  findAll() {
    return this.walletsService.findAll();
  }
  
  @Get(':address')
  getWalletDetails(@Param('address') address: string) {
    return this.apiService.getWalletData(address);
  }

  @Patch(':address')
  update(@Param('address') address: string, @Body() UpdateWalletDto: UpdateWalletDto) {
    return this.walletsService.update(address,UpdateWalletDto);
  }
  @Get(':address')
  findOne(@Param('address') address: string) {
    return this.walletsService.findOne(address);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.walletsService.remove(id);
  }
}
