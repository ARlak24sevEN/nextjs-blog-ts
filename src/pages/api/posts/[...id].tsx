import { NextApiRequest, NextApiResponse } from "next";

type Reqest = {
    username: string
    email : string
  }

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method == 'POST'){
        const {id} = req.query
        console.log('id : '+ id)
        res.status(200).json({ id: id })
    }else{
        res.status(200).json({ status: 'This is else request' })
    }
    
    
}

// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse//<Data>
//   ) {
//     if (req.method == 'POST') {
//       //post
//       const {username ,email } = req.body
//       console.log('username : ' +username)
//       console.log('email : '+email)
  
//       res.status(200).json({ username:username,email:email,status: 'This is post request' })
//     }else if (req.method == 'PATCH'){
//       res.status(200).json({ status: 'This is patch request' })
//     }else{
//       res.status(200).json({ username:"",email:"",status: 'request not POST AND PATH' })
//     }
    
//   }