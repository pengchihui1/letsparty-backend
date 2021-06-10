import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'
import { getParties, editParty } from '../../lib/party'

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  await cors(req, res)
  const result = editParty(req.query.token, { ...req.body })
  console.log(getParties())
  res.json(result)
}