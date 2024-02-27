import { House } from "../house.model";

export interface HouseRepository {
  getHouse: (id: string) => Promise<House>;
  getHouseList: () => Promise<House[]>;
  saveHouse: (house: House) => Promise<House>;
  deleteHouse: (id: string) => Promise<House>;
}
