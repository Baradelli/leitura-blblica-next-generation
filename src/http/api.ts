import { AxiosPromise } from "axios";
import { http } from ".";

import { IResGetReadingById } from "@/@types/res";

const getReadingById = (id: number): AxiosPromise<IResGetReadingById> =>
  http.get(`/readings/${id}`);

const api = {
  readings: {
    findById: getReadingById,
  },
};

export { api };
