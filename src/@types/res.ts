import { IReading } from "@/@types/global";

export interface IResGetReadingById {
  title: string;
  readings: IReading[];
}

export interface IReadingsList {
  id: number;
  title: string;
}

export interface IResReadingsList {
  list: Array<IReadingsList>;
}
