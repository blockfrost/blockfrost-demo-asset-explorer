import React from "react";
import { useAssets } from "hooks/useAssets";
import { Asset } from "./Asset";

function Assets() {
  const { assets, isAssetsError, isAssetsLoading } = useAssets();

  if (isAssetsLoading) {
    return <div className="wrapper">loading</div>;
  }

  return (
    <div className="wrapper">
      {assets.map((asset) => (
        <Asset assetData={asset} />
      ))}
      <style jsx>{`
        .wrapper {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}

export { Assets };
