import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getHeaders } from "utils";
import { API_URL } from "const";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const resultAsset = await axios.get(`${API_URL}/assets/${req.query.id}`, {
      headers: getHeaders(process.env.PROJECT_ID),
    });

    const resultTxs = await axios.get(
      `${API_URL}/txs/${resultAsset.data.initial_mint_tx_hash}`,
      { headers: getHeaders(process.env.PROJECT_ID) }
    );

    const blockId = resultTxs.data.block;

    const resultBlock = await axios.get(`${API_URL}/blocks/${blockId}`, {
      headers: getHeaders(process.env.PROJECT_ID),
    });

    return res.send({
      ...resultAsset.data,
      time: resultBlock.data.time,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Cannot load the data" });
  }
};
