const { google } = require('googleapis');
const { GoogleAuth } = require('google-auth-library');


const auth = new GoogleAuth({
    keyFile: 'credentials.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheetsAPI = google.sheets({ version: 'v4', auth });
const spreadsheetId = '1zNttUmLB9m_sHwHWofBPRtvJUKJnQN64EqplYPatIVM'

const getCounts = async () => {
    const res = await sheetsAPI.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'Counts!A1:C',
    })
    return res.data.values
}

const claim = async (cardName) => {
    const res = await sheetsAPI.spreadsheets.values.get({
        spreadsheetId,
        range: `${cardName}!A1`,
    })
    if (res.data.values && res.data.values[0] && res.data.values[0][0]) {
        const sheets = await sheetsAPI.spreadsheets.get({
            spreadsheetId,
        }).then(res => res.data.sheets)
        const sheetId = sheets.find(sheet => sheet.properties.title === cardName)?.properties?.sheetId
        await sheetsAPI.spreadsheets.batchUpdate({
            spreadsheetId,
            requestBody: {
                requests: [
                    {
                        deleteDimension: {
                            range: {
                                sheetId,
                                dimension: 'ROWS',
                                startIndex: 0,
                                endIndex: 1
                            }
                        }
                    }
                ],
            },
        })
        return res.data.values[0][0]
    }
    return null
}

module.exports = {
    getCounts,
    claim
}
