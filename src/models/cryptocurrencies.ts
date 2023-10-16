export interface CryptocurrenciesModel {
  uuid: string;
  name: string
  currency: string;
  rank: string;
  price: number;
  marketCap: number;
  change: number;
}