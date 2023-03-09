// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  username: string
  email : string
  status: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == 'POST') {
    //post
    const {username ,email } = req.body
    console.log('username : ' +username)
    console.log('email : '+email)

    res.status(200).json({ username:username,email:email,status: 'This is post request' })
  }else if (req.method == 'PATCH'){
    //path
  }else{
    res.status(200).json({ username:"",email:"",status: 'request not POST AND PATH' })
  }
  
}
