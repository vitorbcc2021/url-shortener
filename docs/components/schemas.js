export default {
    User: {
        type: 'object',
        required: ['username', 'password'],
        properties: {
            username: { type: 'string' },
            password: { type: 'string' },
        }
    },
    Url: {
        type: 'object',
        required: ['originalUrl'],
        properties: {
            originalUrl: { type: 'string' },
            shortUrl: { type: 'string' }
        }
    },
    Error: {
        type: 'object',
        properties: {
            message: {type: 'string'}
        }
    },
    AuthResponse: {
        type: 'object',
        properties: {
            token: { type: 'string' }
        }
    }
}