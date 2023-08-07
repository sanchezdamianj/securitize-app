import { ApiUrl, ETH } from "src/constants/exchange-rates";
import axios from "axios";

const calculateExchangeRate = async (currency: string) => {
    //getting exchange rate from API
    const url = `${ApiUrl}fsyms=${ETH}&tsyms=${currency}`;
    const result = await axios.get(url);
    const exchangeRate = result.data[currency].DISPLAY[ETH][currency];
    return exchangeRate
}

export  {calculateExchangeRate};