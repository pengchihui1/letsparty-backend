
import initMiddleware from '../../lib/init-middleware'
import { getParties, createParty } from '../../lib/party'

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS']
  })
)

export default async function handler (req, res) {
  await cors(req, res)
  const result = createParty({ name: req.body.name })
  console.log(getParties())
  res.json(result)
}
