import axios from "axios";
import useSWR from "swr";
import { getHeaders } from "utils";
import { UseAssetsResponse, UseAssetResponse } from "types";
import { API_URL } from "const";

export function useAssets(page: number): UseAssetsResponse {
  const key = `${API_URL}/assets?page=${page}`;
  const { data, error } = useSWR(key, () =>
    axios.get(key, { headers: getHeaders(process.env.PROJECT_ID) })
  );

  const hasNextPage = async (nextPage: number) => {
    const result = await axios.get(`${API_URL}/assets?page=${nextPage}`, {
      headers: getHeaders(process.env.PROJECT_ID),
    });
    return result.data.length === 100;
  };

  return {
    assets: data?.data,
    isAssetsLoading: !error && !data,
    isAssetsError: error,
    hasNextPage,
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

export function useAssetMintHistory(
  policyId: string
): UseAssetMinHistoryResponse {
  const key = `${API_URL}/assets/${policyId}/history`;
  const { data, error } = useSWR(
    key,
    () =>
      axios.get(key, {
        headers: getHeaders(process.env.PROJECT_ID),
      }),
    { refreshInterval: 30000 }
  );

  return {
    assetMintHistory: data?.data,
    isAssetMintHistoryLoading: !error && !data,
    isAssetMintHistoryError: error,
  };
}
