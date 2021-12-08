import { NextApiResponse } from "next";
import { blockfrostAPI } from "utils/blockfrostAPI";

export default async (
  req: { query: { policyId: string } },
  res: NextApiResponse
) => {
  try {
    const resultAsset = await blockfrostAPI.assetsHistory(req.query.policyId);
    return res.send(resultAsset);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Cannot load the data" });
  }
};
