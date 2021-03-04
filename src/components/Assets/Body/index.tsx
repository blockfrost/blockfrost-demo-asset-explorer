import React from "react";
import { useAsset, useAssetMintHistory } from "hooks/useAssets";

interface Props {
  assetId: string;
}

function Body({ assetId }: Props) {
  const { asset, isAssetError, isAssetLoading } = useAsset(assetId);
  const { assetMintHistory } = useAssetMintHistory(assetId);
  return (
    <div className="wrapper">
      <div className="header">
        <div className="column column-policy-id">
          <div className="d-flex align-items-center justify-content-between mg-b-5">
            <h6 className="tx-uppercase tx-10 tx-spacing-1 tx-color-02 tx-semibold mg-b-0">
              Policy Id
            </h6>
          </div>
          <div className="d-flex align-items-end justify-content-between mg-b-5">
            <h5 className="tx-normal tx-rubik lh-2 mg-b-0 text-truncate">
              {asset ? asset.policy_id : ""}
            </h5>
          </div>
        </div>
        <div className="column column-name">
          <div className="d-flex align-items-center justify-content-between mg-b-5">
            <h6 className="tx-uppercase tx-10 tx-spacing-1 tx-color-02 tx-semibold mg-b-0">
              Asset name
            </h6>
          </div>
          <div className="d-flex align-items-end justify-content-end mg-b-5">
            <h5 className="tx-normal tx-rubik lh-2 mg-b-0 text-truncate">
              {asset ? asset.asset_name : ""}
            </h5>
          </div>
        </div>
      </div>
      {isAssetLoading && "loading"}
      {isAssetError && "error"}
      {!isAssetError && !isAssetLoading && assetMintHistory && (
        <div className="table py-4">
          <h5 className="mb-4">Token History (last 10 items)</h5>
          <div className="table-responsive">
            <table className="table table-dashboard mg-b-0">
              <thead>
                <tr>
                  <th>tx hash</th>
                  <th className="text-right">Action</th>
                  <th className="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {assetMintHistory.slice(0, 10).map((historyItem) => {
                  return (
                    <tr key={historyItem.tx_hash}>
                      <td className="tx-color-03 tx-normal">
                        {historyItem.tx_hash}
                      </td>
                      <td
                        className={`tx-medium text-right ${
                          historyItem.action === "minted"
                            ? "tx-success"
                            : "tx-danger"
                        }`}
                      >
                        {historyItem.action}
                      </td>
                      <td className="tx-medium text-right">
                        {historyItem.amount}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <style jsx>{`
        .wrapper {
          min-height: 200px;
          padding: 10px 35px;
        }
        .header {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}

export { Body };
