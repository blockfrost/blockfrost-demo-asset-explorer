import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getHeaders } from "utils";
import { API_URL } from "const";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const resultAsset = await axios.get(
      `${API_URL}/assets/${req.query.policyId}/history`,
      { headers: getHeaders(process.env.PROJECT_ID) }
    );
    return res.send(resultAsset.data);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Cannot load the data" });
  }
};
