import { claim } from "../../services/sheets"

const handler = async (req, res) => {
    const url = await claim(req.body)
    res.status(200).json({ url })
}

export default handler   