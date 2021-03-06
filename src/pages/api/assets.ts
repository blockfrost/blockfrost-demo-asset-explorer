import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getHeaders } from "utils";
import { API_URL } from "const";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      data,
    } = await axios.get(
      `${API_URL}/assets?page=${req.query.page}&order=${req.query.order}`,
      { headers: getHeaders(process.env.PROJECT_ID) }
    );

    if (typeof req.query.page === "string") {
      const resultNextPage = await axios.get(
        `${API_URL}/assets?page=${parseInt(req.query.page) + 1}`,
        { headers: getHeaders(process.env.PROJECT_ID) }
      );

      return res.send({
        assets: data,
        hasNextPage: resultNextPage.data.length !== 0,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Cannot load the data" });
  }
};
