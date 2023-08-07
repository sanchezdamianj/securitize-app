import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallets } from './entities/wallet.entity';
import { Repository } from 'typeorm';
import {ethers} from 'ethers';



@Injectable()
export class WalletsService {
  constructor( 
    @InjectRepository(Wallets) 
    private readonly walletRepository: Repository<Wallets>
  ){}
  
  async create(createWalletDto: CreateWalletDto) {
    const privateKey = ethers.Wallet.createRandom().privateKey;
    const wallet = this.walletRepository.create(createWalletDto);
    
    const wallletsAddress =  new ethers.Wallet(privateKey);
    const walletToSave = {...wallet, address: wallletsAddress.address }
    const walletRepository = await this.walletRepository.save(walletToSave);
    return walletRepository
  }


  async findAll() {
    return await this.walletRepository.find();
  }

  async findOne(id: number) {
    return await this.walletRepository.findOneBy({id});
  }

  async update(id: number, updateWalletDto: UpdateWalletDto) {
    try{
       return await this.walletRepository.update(id,updateWalletDto)

    } catch(e){
      throw new BadRequestException('Wallet not found');
    }
  }

  async remove(id: number) {
    try{
      if(id) await this.walletRepository.softDelete({id});
    }catch(e){
      throw new BadRequestException('Cat not found');
    }
  }
}
