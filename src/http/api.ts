import { AxiosPromise } from "axios";
import { http } from ".";

import { IResGetReadingById, IResReadingsList } from "@/@types/res";

const getReadingById = (id: number): AxiosPromise<IResGetReadingById> =>
  http.get(`/readings/${id}`);

const getReadingList = (): AxiosPromise<IResReadingsList> =>
  http.get("/readings");

const api = {
  readings: {
    findById: getReadingById,
    list: getReadingList,
  },
};

export { api };
