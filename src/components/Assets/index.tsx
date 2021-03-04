import React, { useContext } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { hexToString, getFingerprint } from "utils";
import { useAssets } from "hooks/useAssets";
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionToggle,
} from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Assets() {
  const { assets, isAssetsError, isAssetsLoading } = useAssets();
  const ContextAwareToggle = ({
    eventKey,
    callback,
  }: {
    eventKey: string;
    callback?: (eventKey: string) => void;
  }) => {
    const currentEventKey = useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    if (isCurrentEventKey) {
      return (
        <div className="d-flex align-items-center">
          <IoIosArrowUp
            size={25}
            role="button"
            className=""
            onClick={decoratedOnClick}
          />
        </div>
      );
    } else {
      return (
        <div className="d-flex align-items-center">
          <IoIosArrowDown
            size={25}
            role="button"
            className=""
            onClick={decoratedOnClick}
          />
        </div>
      );
    }
  };

  const ContextAwareContent = ({
    eventKey,
    policyId,
  }: {
    eventKey: string;
    policyId: string;
  }) => {
    const currentEventKey = useContext(AccordionContext);
    const isCurrentEventKey = currentEventKey === eventKey;

    if (isCurrentEventKey) {
      return <Body policyId={policyId} />;
    } else {
      return <div />;
    }
  };

  return (
    <div className="wrapper">
      <h3 className="my-3">Cardano Assets</h3>
      <Accordion>
        {isAssetsLoading && (
          <div className="mt-2">
            <Skeleton count={50} width="100%" height={77} />
          </div>
        )}
        {!isAssetsLoading &&
          !isAssetsError &&
          assets.map((asset) => {
            const policyIdSize = 56;
            const assetNameInHex = asset.asset.slice(policyIdSize);
            const policyId = asset.asset.substr(
              asset.asset.length - policyIdSize
            );
            const assetName = hexToString(assetNameInHex);
            const fingerprint = getFingerprint(policyId, assetNameInHex);

            return (
              <Card key={asset.asset} className="mb-2">
                <Card.Header className="d-flex">
                  <div className="header">
                    <div className="left">
                      <ContextAwareToggle eventKey={asset.asset} />
                    </div>
                    <div className="right">
                      <Header
                        assetName={assetName}
                        quantity={asset.quantity}
                        fingerprint={fingerprint}
                      />
                    </div>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey={asset.asset}>
                  <Card.Body>
                    <ContextAwareContent
                      policyId={policyId}
                      eventKey={asset.asset}
                    />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
      </Accordion>
      <style jsx>{`
        .wrapper {
          margin: 50px 0;
        }
        .header {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
        }
        .left {
          margin-right: 10px;
        }
        .right {
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export { Assets };
