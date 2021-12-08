import { NextApiResponse } from "next";
import { blockfrostAPI } from "utils/blockfrostAPI";

export default async (
  req: {
    query: { order: "asc" | "desc" | undefined; id: string; page: string };
  },
  res: NextApiResponse
) => {
  try {
    const assets = await blockfrostAPI.assets({
      order: req.query.order,
    });

    const resultNextPage = await blockfrostAPI.assets({
      order: req.query.order,
      page: parseInt(req.query.page) + 1,
    });

    return res.send({
      assets,
      hasNextPage: resultNextPage.length !== 0,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Cannot load the data" });
  }
};
