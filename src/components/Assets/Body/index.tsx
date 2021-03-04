import React from "react";
import { useAsset } from "hooks/useAssets";

interface Props {
  policyId: string;
}

function Body({ policyId }: Props) {
  const { asset, isAssetError, isAssetLoading } = useAsset(policyId);
  console.log("asset", asset);
  return <div className="wrapper">kaaamo</div>;
}

export { Body };
