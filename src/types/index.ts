export interface Headers {
  project_id: string;
}

export interface Asset {
  asset: string;
  quantity: string;
}

export interface UseAssetsResponse {
  assets: Asset[];
  isAssetsLoading: boolean;
  isAssetsError: boolean;
}

export interface UseAssetResponse {
  asset: Asset;
  isAssetLoading: boolean;
  isAssetError: boolean;
}
