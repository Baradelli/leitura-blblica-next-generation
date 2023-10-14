import Header from "@/components/Header";
import { useRouter } from "next/router";

import readings from "../../../data.json";

export async function getStaticPaths() {
  const paths = readings.ntlh.map((_, i) => {
    return { params: { day: String(i) } };
  });

  return {
    paths: paths,
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  const day = context.params.day;

  const reading = readings.ntlh[Number(day)];

  return {
    props: reading,
  };
}

export default function PaginaLeitura(props: any) {
  console.log(props);
  return (
    <>
      <Header title="leitura" />

      {props.readings.map((v: any) => (
        <>
          <h1>{v.title}</h1>
          <h4>{v.subtitle}</h4>

          <p>{v.verses[0].text}</p>
        </>
      ))}
    </>
  );
}
