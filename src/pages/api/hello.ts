// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getFeed } from "@/lib/rss";
import type { NextApiRequest, NextApiResponse } from "next";


async function run(model: string, input: any) {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/f29409296f53c63145fdf64953dc2eb8/ai/run/${model}`,
    {
      headers: { Authorization: `Bearer ${process.env.CLOUDFLARE_TOKEN}` },
      method: "POST",
      body: JSON.stringify(input),
    }
  );
  const result = await response.json();
  return result;
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {

  const data = (req.body)

  console.log(data)
  const input = {
        input_text: data,
        max_length: 1024
      }

  const summaryResponse = await run("@cf/facebook/bart-large-cnn", input)
  res.status(200).json({ summary: summaryResponse.result.summary });
}
