import React from "react";

function Asset({ assetData }) {
  console.log("aaa", assetData);
  return (
    <div className="card d-flex p-3 mb-2">
      <div>{assetData.asset}</div>
      <div>{assetData.quantity}</div>
    </div>
  );
}

export { Asset };
