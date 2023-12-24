import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { api } from "@/http/api";

import Header from "@/components/Header";
import { IReading } from "@/@types/global";
import Reading from "@/components/Reading";

// export async function getStaticProps(context: any) {
//   const day = context.params.day;
//   const indexDay = day - 1;

//   const { readings } = readingsJSON.ntlh[Number(indexDay)];

//   return {
//     props: {
//       readings,
//       day,
//     },
//   };
// }

// interface IProps {
//   day: string;
//   readings: IReading[];
// }

export default function ReadingPage() {
  const { query: routerQuery } = useRouter();

  const [title, setTitle] = useState("");
  const [readings, setReadings] = useState<IReading[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getReadings = async (id: number) => {
    try {
      if (isLoading) return;
      setIsLoading(true);

      const { data } = await api.readings.findById(id);

      setTitle(data.title);
      setReadings(data.readings);
    } catch (error) {
      console.log("ERROR: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const id = routerQuery.id;

    getReadings(Number(id));
  }, [routerQuery]);

  return (
    <>
      {isLoading ? (
        <Header title="Aguarde..." />
      ) : (
        <>
          <Header title={title} />

          {readings.map((reading, i) => (
            <Reading key={reading.title} reading={reading} readingIndex={i} />
          ))}
        </>
      )}
    </>
  );
}
