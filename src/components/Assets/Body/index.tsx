import React from "react";
import { useAsset, useAssetMintHistory } from "hooks/useAssets";

interface Props {
  assetId: string;
}

function Body({ assetId }: Props) {
  const { asset, isAssetError, isAssetLoading } = useAsset(assetId);
  const {
    assetMintHistory,
    isAssetMintHistoryLoading,
    isAssetMintHistoryError,
  } = useAssetMintHistory(assetId);

  console.log("assetMintHistory", assetMintHistory);
  console.log("assetMintHistory", isAssetMintHistoryLoading);
  console.log("assetMintHistory", isAssetMintHistoryError);

  return (
    <div className="wrapper">
      {isAssetLoading && "loading"}
      {isAssetError && "error"}
      {!isAssetError && !isAssetLoading && asset && <div>aaa</div>}
    </div>
  );
}

export { Body };
