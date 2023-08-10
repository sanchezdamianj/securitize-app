
import axios from 'axios';
import {  Injectable } from '@nestjs/common';
import {Web3} from 'web3';

@Injectable()
export class ApiService {

    async isWalletOld(dateString:number) {
        const currentDate = new Date();
        const givenDate = new Date(dateString);
        const differenceInMilliseconds = currentDate.getTime() - givenDate.getTime();
        const oneYearInMilliseconds = 365.25 * 24 * 60 * 60 * 1000;
        const isOld = differenceInMilliseconds > oneYearInMilliseconds;
        return isOld;
      }

    async getFirstTransactionDate(address:string) {
     
          const url = `${process.env.API_URL}?module=account&action=txlistinternal&address=${address}&startblock=0&endblock=2702578&page=1&offset=10&sort=asc&apikey=${process.env.API_KEY}`
          const response = await axios.get(url);
          const firstOneTransaction = response.data.result[0].timeStamp * 1000
          const isOld = await this.isWalletOld(firstOneTransaction)
   
          return isOld
 
    }

    async getBalance(address: string) {
            const apiKey = process.env.API_KEY;
            const apiUrl = process.env.API_URL;
            const url = `${apiUrl}?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`;
        
            try {
              const response = await axios.get(url);
              // const balanceWei = parseInt(response.data.result);
              // const balanceEth = balanceWei / 10 ** 18; // Convert Wei to ETH
              // return balanceEth;
              return (response.data.result)
            } catch (error) {
              throw new Error(`Error fetching balance: ${error.message}`);
            }
    }

    async getWalletData(address: string){

        const isOld =await this.getFirstTransactionDate(address)
        const balanceInWeiCurrrency = await this.getBalance(address)
        const balance  = (Web3.utils.fromWei(balanceInWeiCurrrency, 'ether'))
      
      return {address, balance, isOld}  
         
    }

}