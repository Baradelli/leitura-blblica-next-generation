import { useState } from "react";

import { IReading } from "@/@types/global";

interface ReadingProps {
  reading: IReading;
  readingIndex: number;
}

export default function Reading({ reading, readingIndex }: ReadingProps) {
  const [highlightedIndexs, setHighlightedIndexs] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const onAddNewHighlighted = (index: number) => {
    setHighlightedIndexs((prev) => [...prev, index]);
  };

  const onRemoveHighlighted = (index: number) => {
    setHighlightedIndexs((prev) => prev.filter((item) => item !== index));
  };

  const handleVerse = (index: number) => {
    const isHighlighted = highlightedIndexs.includes(index);

    if (isHighlighted) onRemoveHighlighted(index);
    else onAddNewHighlighted(index);
  };

  return (
    <>
      <button
        style={{ all: "unset" }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-1">
          <i
            className={`fa-solid fa-caret-right color-title text-lg transition-all ${
              isOpen ? "fa-rotate-90" : ""
            }`}
          />

          <h2 className="text-xl color-title">{reading.title}</h2>
        </div>
      </button>

      {isOpen ? (
        <div className="flex flex-col px-4 gap-3">
          <h3 className="color-title text-lg">{reading.subtitle}</h3>

          {reading.verses.map((verse, verseIndex) => {
            const isHighlighted = highlightedIndexs.includes(verseIndex);
            const bgColor = isHighlighted ? "color-highlight" : "";

            return (
              <div
                key={`${verse.chapter}-${verse.verse}`}
                className={`cursor-pointer text-base color-text flex gap-1 rounded ${bgColor}`}
                onClick={() => handleVerse(verseIndex)}
              >
                <div className="text-xs color-verse">{verse.verse}</div>
                <span>{verse.text}</span>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
