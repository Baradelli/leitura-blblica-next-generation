export interface IReading {
  title: string;
  subtitle: string;
  verses: IVerse[];
}

export interface IVerse {
  chapter: number;
  verse: number;
  text: string;
}

export type BibleVersions =
  | "ACF"
  | "ARA"
  | "ARC"
  | "KJA"
  | "NAA"
  | "NTLH"
  | "NVI"
  | "NVT";
