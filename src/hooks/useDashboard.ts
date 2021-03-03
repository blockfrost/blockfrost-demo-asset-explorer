import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";
import * as DashboardTypes from "types/Dashboard";

export const useDashboard = () => {
  const router = useRouter();
  const [session, loading] = useSession();
  const [isPlaceholder, setIsPlaceholder] = useState<boolean>(false);

  if (!loading && !session) {
    router.push("/");
  }

  return {
    isPlaceholder,
    setIsPlaceholder,
  };
};

export const DashboardContext = createContext<DashboardTypes.DashboardContextValues | null>(
  null
);
DashboardContext.displayName = "DashboardContext";

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (context === null) throw Error("DashboardContext used without Context");
  return context;
};
