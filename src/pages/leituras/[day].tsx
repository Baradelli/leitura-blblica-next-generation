import Header from "@/components/Header";

import readingsJSON from "../../../data.json";
import Reading from "@/components/Reading";
import { IReading } from "@/types";

export async function getStaticPaths() {
  const paths = readingsJSON.ntlh.map((_, i) => {
    return { params: { day: String(i + 1) } };
  });

  return {
    paths: paths,
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  const day = context.params.day;
  const indexDay = day - 1;

  const { readings } = readingsJSON.ntlh[Number(indexDay)];

  return {
    props: {
      readings,
      day,
    },
  };
}

interface IProps {
  day: string;
  readings: IReading[];
}

export default function ReadingPage(props: IProps) {
  return (
    <>
      <Header title={`Dia ${props.day}`} />

      {props.readings.map((reading) => (
        <Reading key={reading.title} reading={reading} />
      ))}

      {/* {props.readings.map((v: any) => (
        <div key="">
          <h1>{v.title}</h1>
          <h4>{v.subtitle}</h4>

          <p>{v.verses[0].text}</p>
        </div>
      ))} */}
    </>
  );
}
