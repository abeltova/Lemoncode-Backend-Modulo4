import { House } from "../house.model";
import { HouseRepository } from "./house.repository";

export const dbRepository: HouseRepository = {
  getHouse: async (id: string) => {
    throw new Error("Not implemented");
  },
  getHouseList: async () => {
    throw new Error("Not implemented");
  },
  saveHouse: async (house: House) => {
    throw new Error("Not implemented");
  },
  deleteHouse: async (id: string) => {
    throw new Error("Not implemented");
  }
};
