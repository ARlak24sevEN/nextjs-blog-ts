import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, resp: NextApiResponse) {
    const { query: { id }, method, } = req

    const { title } = req.body

    switch (method) {
        case 'GET':
            resp.status(200).json({ id, title: `user #${id}` })
            break;

        case 'PUT':
            resp.status(200).json({ id, title: title || `user #${id}` })
            break
        default:
            resp.setHeader('Allow', ['GET', 'PUT'])
            resp.status(405).end(`Method ${method} Not Allowed`)
    }
}