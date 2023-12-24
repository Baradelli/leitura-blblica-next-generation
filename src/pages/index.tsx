import { useEffect, useState } from "react";

import { IReadingsList } from "@/@types/res";

import { api } from "@/http/api";

import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  const [readingsList, setReadingsList] = useState<IReadingsList[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getReadingsList = async () => {
    try {
      if (isLoading) return;
      setIsLoading(true);

      const { data } = await api.readings.list();

      setReadingsList(data.list);
    } catch (error) {
      console.log("ERROR: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getReadingsList();
  }, []);

  return (
    <>
      <Header title="Bem vindo" />

      <div className="flex flex-col">
        <h2 className="text-xl color-title">Leituras disponíveis</h2>
        <span className="text-sm color-verse">
          Em breve mais leituras serão adicionadas...
        </span>
      </div>

      {readingsList.length ? (
        <>
          {readingsList.map(({ id, title }) => (
            <Link
              href={`leituras/${id}`}
              key={id}
              className="flex gap-2 items-center"
            >
              <i className="fa-solid fa-circle text-[8px] color-verse" />

              <span className="text-lg color-text">{title}</span>
            </Link>
          ))}
        </>
      ) : null}
    </>
  );
}
