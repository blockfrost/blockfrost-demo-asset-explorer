import { NextApiResponse } from "next";
import { blockfrostAPI } from "utils/blockfrostAPI";

export default async (req: { query: { id: string } }, res: NextApiResponse) => {
  try {
    const resultAsset = await blockfrostAPI.assetsById(req.query.id);
    const resultTxs = await blockfrostAPI.txs(resultAsset.initial_mint_tx_hash);
    const resultBlock = await blockfrostAPI.blocks(resultTxs.block);

    return res.send({
      ...resultAsset,
      time: resultBlock.time,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Cannot load the data" });
  }
};
