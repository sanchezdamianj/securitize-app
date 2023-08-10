import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExchangeRate } from './entities/exchange-rate.entity';
import { Repository } from 'typeorm';
import axios from 'axios';

@Injectable()
export class ExchangeRateService {
  constructor(
    @InjectRepository(ExchangeRate)
    private exchangeRateRepository: Repository<ExchangeRate>,
  ){}

  async getExchangeRateData() {
    const url = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR';
    const response = await axios.get(url);
    return response.data;
  }

  private async createExchangeRate() {
    const data = await this.getExchangeRateData();
    const payloadER = new ExchangeRate();
    payloadER.EUR = data.EUR
    payloadER.USD = data.USD
    return payloadER;
  }

  async getExchangeRate() {
    const excRatesFound = await this.exchangeRateRepository.find()

    if( excRatesFound.length > 0){
      const newExcRates = await this.createExchangeRate();
      const found = await this.exchangeRateRepository.find()
      this.exchangeRateRepository.update(found[0].id, newExcRates)
      return await this.exchangeRateRepository.find()
    } else{
      const excRates = await this.createExchangeRate();

      return this.exchangeRateRepository.save(excRates);
    }
  }
}
