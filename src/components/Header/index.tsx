import { useState, useEffect } from "react";

import { changeTheme, handleTheme } from "@/utils/handle-theme";
import Link from "next/link";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  const [isInHome, setIsInHome] = useState(false);

  useEffect(() => {
    setIsInHome(window.location.pathname === "/");
    setCurrentTheme(handleTheme());
  }, []);

  return (
    <header className="flex items-center justify-between">
      {isInHome ? null : (
        <Link href="/" className="w-[30px]">
          <i className="fa-solid fa-house-chimney fa-xl color-header" />
        </Link>
      )}

      <h1 className="color-header text-3xl">{title}</h1>

      <button
        style={{ all: "unset" }}
        onClick={() => {
          setCurrentTheme((prev) => (prev === "dark" ? "light" : "dark"));
          changeTheme();
        }}
      >
        {currentTheme === "light" ? (
          <div className="w-[30px]">
            <i className="fa-solid fa-moon fa-2xl color-header" />
          </div>
        ) : (
          <div className="w-[30px]">
            <i className="fa-solid fa-sun-bright fa-2xl color-header" />
          </div>
        )}
      </button>
    </header>
  );
}
