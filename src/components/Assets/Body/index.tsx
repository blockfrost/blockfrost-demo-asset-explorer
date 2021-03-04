import React from "react";
import { useAsset } from "hooks/useAssets";

interface Props {
  assetId: string;
}

function Body({ assetId }: Props) {
  const { asset, isAssetError, isAssetLoading } = useAsset(assetId);
  return (
    <div className="wrapper">
      {isAssetLoading && "loading"}
      {isAssetError && "error"}
      {!isAssetError && !isAssetLoading && asset && <div>aaa</div>}
    </div>
  );
}

export { Body };
