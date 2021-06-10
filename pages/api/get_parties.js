import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'
import { getParties } from '../../lib/party'

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  await cors(req, res)
  console.log(getParties())
  res.json(getParties())
}