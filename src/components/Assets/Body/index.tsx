import React from "react";
import { Asset } from "types";

interface Props {
  asset: Asset;
}

function Body({ asset }: Props) {
  return (
    <div className="wrapper">
      <div>{asset.asset}</div>
    </div>
  );
}

export { Body };
