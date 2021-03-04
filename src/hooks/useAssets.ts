import axios from "axios";
import useSWR from "swr";
import { getHeaders } from "utils";
import { UseAssetsResponse, UseAssetResponse } from "types";
import { API_URL } from "const";

export function useAssets(): UseAssetsResponse {
  const key = `${API_URL}/assets`;
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

export function useAsset(policyId: string): UseAssetResponse {
  const key = `${API_URL}/assets/${policyId}`;
  const { data, error } = useSWR(
    key,
    () =>
      axios.get(key, {
        headers: getHeaders(process.env.PROJECT_ID),
      }),
    { refreshInterval: 30000 }
  );

  return {
    asset: data?.data,
    isAssetLoading: !error && !data,
    isAssetError: error,
  };
}
