// import { WalletsService } from './wallets.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallets } from './entities/wallet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WalletsService {
  constructor( 
    @InjectRepository(Wallets) 
    private readonly walletRepository: Repository<Wallets>
  ){}


  async create(createWalletDto: CreateWalletDto) {
      if(this.findOne((createWalletDto.address))){
        const walletToSave = this.walletRepository.create(createWalletDto);
        const walletRepository = await this.walletRepository.save(walletToSave);
        return walletRepository
      } else {
        const walletDB = await this.findOne(createWalletDto.address);
        const walletToUpdate = this.update(walletDB.address,createWalletDto);
        return walletToUpdate
      }
  }

  async findAll() {
    return await this.walletRepository.find();
  }

  async findOne(address: string) {
    return await this.walletRepository.findOneBy({address});
  }

  async update(address: string, updateWalletDto: UpdateWalletDto) {
    try{
      console.log(address)
       return await this.walletRepository.update(address,updateWalletDto)

    } catch(e){
      throw new BadRequestException('Wallet not found');
    }
  }

  async remove(id: number) {
    try{
      if(id) await this.walletRepository.softDelete({id});
    }catch(e){
      throw new BadRequestException('Wallet not found');
    }
  }
}
