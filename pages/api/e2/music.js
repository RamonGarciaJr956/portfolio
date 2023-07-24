const ytdl = require('ytdl-core')

export default function handler(req, res) {
    const { URL } = req.query
    if(ytdl.validateURL(URL)){
        ytdl(URL).pipe(res)
    } else {
        res.status(400).json({"ERROR":"Not valid URL"})
    }
}