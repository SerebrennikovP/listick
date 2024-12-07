import { createContext, useContext, useState, ReactNode } from "react";
import accounts from "../test_data/accounts.json";

type AccountContextType = {
  accountId: string | null;
  setAccountId: (id: string | null) => void;
  userLists: string[] | null;
};

const AccountContextCreate = createContext<AccountContextType | undefined>(
  undefined
);

const typedAccounts: Record<string, { lists: string[] }> = accounts;

export const useAccountContext = () => {
  const context = useContext(AccountContextCreate);
  if (!context) {
    throw new Error(
      "useAccountContext must be used within a AccountContextProvider"
    );
  }
  return context;
};

export default function AccountContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [accountId, setAccountId] = useState<string | null>("pasha");
  const userLists =
    accountId && typedAccounts[accountId]?.lists
      ? typedAccounts[accountId].lists
      : null;

  return (
    <AccountContextCreate.Provider
      value={{ accountId, setAccountId, userLists }}
    >
      {children}
    </AccountContextCreate.Provider>
  );
}
