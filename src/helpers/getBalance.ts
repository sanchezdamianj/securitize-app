import axios from "axios";
import { ApiBalanceUrl } from "src/constants/exchange-rates";

const getBalance = address => axios.get(`${ApiBalanceUrl}?module=account&action=balance&address=${address}&apiKey=${process.env.API_KEY}`)

export { getBalance }