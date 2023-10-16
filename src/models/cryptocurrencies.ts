export interface CryptocurrenciesModel {
  uuid: string;
  name: string
  currency: string;
  rank: number;
  price: number;
  marketCap: number;
  change: number;
  iconUrl: string
}