import { IVerse } from "@/@types/global";

interface VerseProps {
  verse: IVerse;
  verseIndex: number;
}

export const Verse = ({ verse, verseIndex }: VerseProps) => {
  return (
    <div
      key={`${verse.chapter}-${verse.verse}`}
      className="text-base color-text flex gap-1"
    >
      <div className="text-xs color-verse">{verse.verse}</div>
      <span className="cursor-pointer">{verse.text}</span>
    </div>
  );
};
