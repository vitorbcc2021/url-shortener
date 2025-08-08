export default {
    '/register': {
        post: {
            summary: 'Registrar novo usuário',
            tags: ['Authentication'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/User'
                        }
                    }
                }
            },
            responses: {
                201: {
                    description: 'Usuário criado com sucesso',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    message: { type: 'string' },
                                    userId: { type: 'string' }
                                }
                            }
                        }
                    }
                },
                400: {
                    $ref: '#/components/responses/ValidationError'
                },
                409: {
                    description: 'Usuário já existe',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error'
                            }
                        }
                    }
                }
            }
        }
    },
    '/login': {
        post: {
            summary: 'Autenticar usuário',
            tags: ['Authentication'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                username: { type: 'string' },
                                password: { type: 'string' }
                            },
                            required: ['username', 'password']
                        }
                    }
                }
            },
            responses: {
                200: {
                    description: 'Login bem-sucedido',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/AuthResponse'
                            }
                        }
                    }
                },
                401: {
                    $ref: '#/components/responses/Unauthorized'
                },
                404: {
                    $ref: '#/components/responses/NotFound'
                }
            }
        }
    }
}