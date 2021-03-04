export interface Headers {
  project_id: string;
}

export interface UseAssetsResponse {
  assets: {
    asset: string;
    quantity: string;
  }[];
  isAssetsLoading: boolean;
  isAssetsError: boolean;
  hasNextPage: (nextPage: number) => Promise<boolean>;
}

export interface UseAssetResponse {
  asset: {
    asset_name: string;
    fingerprint: string;
    initial_mint_tx_hash: string;
    metadata: string;
    policy_id: string;
    quantity: string;
  };
  isAssetLoading: boolean;
  isAssetError: boolean;
}
