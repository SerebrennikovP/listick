import { createContext, useContext, useState, ReactNode } from "react";
import rawLists from "../test_data/lists.json";

type ListContextType = {
  activeListId: string | null;
  setActiveListId: (id: string | null) => void;
  lists: Lists;
  activeList: ListDataType | null;
  backgroundColor: string;
};

const ListContextCreate = createContext<ListContextType | undefined>(undefined);

export type ListDataType = {
  title: string;
  color: string;
  list: { text: string; level: number; checked: boolean }[];
};

type Lists = Record<string, ListDataType>;

const lists: Lists = rawLists;

export const useListContext = () => {
  const context = useContext(ListContextCreate);
  if (!context) {
    throw new Error("useListContext must be used within a ListContextProvider");
  }
  return context;
};

export default function ListContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeListId, setActiveListId] = useState<string | null>(null);

  const activeList = activeListId ? lists[activeListId] : null;
    const backgroundColor = activeList?.color || "#eafeff";
  return (
    <ListContextCreate.Provider
      value={{ activeListId, setActiveListId, lists, activeList, backgroundColor }}
    >
      {children}
    </ListContextCreate.Provider>
  );
}
