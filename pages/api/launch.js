import { deleteFirstColumnInEachSheet } from "../../services/sheets"


const handler = async (req, res) => {
    await deleteFirstColumnInEachSheet()
    res.status(200).json({ success: true })
}

export default handler