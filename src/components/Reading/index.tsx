import { IReading } from "@/types";
import { useState } from "react";

interface ReadingProps {
  reading: IReading;
}

export default function Reading({ reading }: ReadingProps) {
  const [isOpen, setIsOpen] = useState(false);

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

          {reading.verses.map((verse) => (
            <div
              key={`${verse.chapter}-${verse.verse}`}
              className="text-base color-text flex gap-1"
            >
              <div className="text-xs color-verse">{verse.verse}</div>
              {verse.text}
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}
