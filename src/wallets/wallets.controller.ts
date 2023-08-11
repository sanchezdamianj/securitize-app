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

  //quizas aca puedo traerme por id o address el value de isFavorite para mostrarlo en el front
  @Get('byId/:id')
  findOne(@Param('id') id: number) {
    return this.walletsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWalletDto: UpdateWalletDto) {
    return this.walletsService.update(+id, updateWalletDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.walletsService.remove(id);
  }
}
