import { NextApiRequest, NextApiResponse } from "next";

const users = [
    {
        id: 1,
        name: 'arlak',
        email: 'arlak.a@orcsoft.co.th'
    },
    {
        id: 2,
        name: 'nadia',
        email: 'nadia@orcsoft.co.th'
    },
]

export default function handler(req:NextApiRequest,res:NextApiResponse){
    res.status(200).json(users)
}