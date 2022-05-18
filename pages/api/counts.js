import { getCounts } from "../../services/sheets"


const counts = async (req, res) => {
    const cardCounts = await getCounts()
    res.status(200).json(cardCounts || [])
}

export default counts