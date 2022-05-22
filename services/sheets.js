const { google } = require('googleapis');

const googleAuth = new google.auth.GoogleAuth()

const auth = googleAuth.fromJSON({
    type: process.env.GOOGLE_CREDS_type,
    project_id: process.env.GOOGLE_CREDS_project_id,
    private_key_id: process.env.GOOGLE_CREDS_private_key_id,
    private_key: process.env.GOOGLE_CREDS_private_key.replace(new RegExp("\\\\n", "\g"), "\n"),
    client_email: process.env.GOOGLE_CREDS_client_email,
    client_id: process.env.GOOGLE_CREDS_client_id,
    auth_uri: process.env.GOOGLE_CREDS_auth_uri,
    token_uri: process.env.GOOGLE_CREDS_token_uri,
    auth_provider_x509_cert_url: process.env.GOOGLE_CREDS_auth_provider_x509_cert_url,
    client_x509_cert_url: process.env.GOOGLE_CREDS_client_x509_cert_url,
});
auth.scopes = ['https://www.googleapis.com/auth/spreadsheets']
const sheetsAPI = google.sheets({ version: 'v4', auth });
const spreadsheetId = process.env.SPREADSHEET_ID

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
        const userCardsSheetId = sheets.find(sheet => sheet.properties.title === 'UsedCards')?.properties?.sheetId
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
                    },
                    {
                        appendCells: {
                            sheetId: userCardsSheetId,
                            rows: [
                                {
                                    values: [
                                        {
                                            userEnteredValue: { stringValue: res.data.values[0][0] },
                                            textFormatRuns: [
                                                {
                                                    startIndex: 0,
                                                    format: {
                                                        link: {
                                                            uri: res.data.values[0][0]
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            userEnteredValue: { stringValue: cardName }
                                        }
                                    ]
                                }
                            ],
                            fields: '*'
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
