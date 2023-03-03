// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Data = {
	name: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const jsonDir = path.join(process.cwd(), "data", "technologies.json");

	const technologiesStream = fs.createReadStream(jsonDir);

	res.writeHead(200, {
		"Content-Type": "application/json",
		"Cache-Control": "public, max-age=86400, s-maxage=86400",
	});

	technologiesStream.pipe(res);
}
