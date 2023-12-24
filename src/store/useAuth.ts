import { BibleVersions } from "@/@types/global";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthProps {
  bibleVersion: BibleVersions;
  token: string | null;
  user: any;
}

export const useAuth = create(
  persist<AuthProps>(
    (set, get) => ({
      bibleVersion: "NVI",
      token: null,
      user: {},
    }),
    { name: "AUTH_STORAGE" }
  )
);
