import Header from "@/components/Header";

import readings from "../../data.json";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header title="Bem vindo" />

      <div className="flex flex-col">
        <h2 className="text-xl color-title">Leituras disponíveis</h2>
        <span className="text-sm color-verse">
          Em breve mais leituras serão adicionadas...
        </span>
      </div>

      {readings.ntlh.map((_, i) => (
        <Link
          href={`leituras/${i + 1}`}
          key={i}
          className="flex gap-2 items-center"
        >
          <i className="fa-solid fa-circle text-[8px] color-verse" />

          <span className="text-lg color-text">Dia {i + 1}</span>
        </Link>
      ))}
    </>
  );
}
