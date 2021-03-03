import axios from "axios";
import useSWR from "swr";
import { getHeaders } from "utils";
import { API_URL } from "const";

const key = `${API_URL}/assets`;

export function useAssets() {
  const { data, error } = useSWR(
    key,
    () => axios.get(key, { headers: getHeaders(process.env.PROJECT_ID) }),
    { refreshInterval: 30000 }
  );

  return {
    assets: data?.data,
    isAssetsLoading: !error && !data,
    isAssetsError: error,
  };
}
