import jwt from 'jsonwebtoken'

export function authenticate(req, res, next) {
    const authHeader = req.headers.authorization

    if(!authHeader) {
        res.status(404).json({error: "There\'s no authorization header"})
    }


    const tokenParts = authHeader?.split(' ')
    const token = tokenParts.length === 2 ? tokenParts[1] : null

    if (!token) {
        return res.status(401).json({ error: "There\'s no token!" })
    }

    const SECRET = process.env.SECRET

    jwt.verify(token, SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid Token!' })
        }

        req.user = user
        next()
    })
}