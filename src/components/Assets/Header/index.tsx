import React from "react";
import { Asset } from "types";
import { hexToString, getFingerprint } from "utils";

interface Props {
  asset: Asset;
}

function Header({ asset }: Props) {
  const policyIdSize = 56;
  const assetNameInHex = asset.asset.slice(policyIdSize);
  const policyId = asset.asset.substr(asset.asset.length - policyIdSize);
  const assetName = hexToString(assetNameInHex);
  const fingerprint = getFingerprint(policyId, assetNameInHex);

  return (
    <div className="d-flex">
      <div className="left">
        <div className="column column-name">
          <div className="d-flex align-items-center justify-content-between mg-b-5">
            <h6 className="tx-uppercase tx-10 tx-spacing-1 tx-color-02 tx-semibold mg-b-0">
              Asset name
            </h6>
          </div>
          <div className="d-flex align-items-end justify-content-between mg-b-5">
            <h5 className="tx-normal tx-rubik lh-2 mg-b-0 text-truncate">
              {assetName}
            </h5>
          </div>
        </div>
        <div className="column column-fingerprint">
          <div className="d-flex align-items-center justify-content-between mg-b-5">
            <h6 className="tx-uppercase tx-10 tx-spacing-1 tx-color-02 tx-semibold mg-b-0">
              Fingerprint
            </h6>
          </div>
          <div className="d-flex align-items-end justify-content-between mg-b-5">
            <h5 className="tx-normal tx-rubik lh-2 mg-b-0 text-truncate text-monospace">
              {fingerprint}
            </h5>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="column column-name">
          <div className="d-flex align-items-center justify-content-end mg-b-5">
            <h6 className="tx-uppercase tx-10 tx-spacing-1 tx-color-02 tx-semibold mg-b-0">
              Quantity
            </h6>
          </div>
          <div className="d-flex align-items-end justify-content-end mg-b-5">
            <h5 className="tx-normal tx-rubik lh-2 mg-b-0 text-truncate">
              {asset.quantity}
            </h5>
          </div>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          margin-top: 2px;
          width: 100%;
          justify-content: space-between;
        }
        .column-name {
          min-width: 180px;
          max-width: 200px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .column-fingerprint {
          max-width: 480px;
        }
        .left {
          flex: 1;
          display: flex;
          height: 100%;
        }
        .right {
          justify-content: flex-end;
          display: flex;
        }
      `}</style>
    </div>
  );
}

export { Header };
