export default {
    '/': {
        post: {
            summary: 'Encurtar URL',
            tags: ['URL'],
            security: [{ BearerAuth: [] }],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                originalUrl: { type: 'string' }
                            },
                            required: ['originalUrl']
                        }
                    }
                }
            },
            responses: {
                201: {
                    description: 'URL encurtada criada',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Url'
                            }
                        }
                    }
                },
                400: {
                    $ref: '#/components/responses/ValidationError'
                },
                401: {
                    $ref: '#/components/responses/Unauthorized'
                }
            }
        },
    },
    '/{shortUrl}': {
        get: {
            summary: 'Redirecionar para URL original (Devido a limitações do Swagger, os testes devem ser realizados na barra de busca do navegador)',
            tags: ['URL'],
            parameters: [{
                in: 'path',
                name: 'shortUrl',
                schema: { type: 'string' },
                required: true,
                description: 'URL encurtada'
            }],
            responses: {
                302: {
                    description: 'Redirecionamento',
                    headers: {
                        Location: {
                            schema: { type: 'string' },
                            description: 'URL original'
                        }
                    }
                },
                404: {
                    $ref: '#/components/responses/NotFound'
                }
            }
        },
        put: {
            summary: 'Atualizar URL',
            tags: ['URL'],
            security: [{ BearerAuth: [] }],
            parameters: [{
                in: 'path',
                name: 'shortUrl',
                schema: { type: 'string' },
                required: true
            }],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                newUrl: { type: 'string' }
                            },
                            required: ['newUrl']
                        }
                    }
                }
            },
            responses: {
                201: {
                    description: 'URL atualizada',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Url'
                            }
                        }
                    }
                },
                403: {
                    $ref: '#/components/responses/Forbidden'
                },
                404: {
                    $ref: '#/components/responses/NotFound'
                }
            }
        },
        delete: {
            summary: 'Excluir URL',
            tags: ['URL'],
            security: [{ BearerAuth: [] }],
            parameters: [{
                in: 'path',
                name: 'shortUrl',
                schema: { type: 'string' },
                required: true
            }],
            responses: {
                204: {
                    description: 'URL excluída'
                },
                403: {
                    $ref: '#/components/responses/Forbidden'
                },
                404: {
                    $ref: '#/components/responses/NotFound'
                }
            }
        }
    },
    '/urls': {
        get: {
            summary: 'Listar todas as URLs do usuário',
            description: 'Retorna todas as URLs encurtadas pertencentes ao usuário autenticado',
            tags: ['URL'],
            security: [{ BearerAuth: [] }],
            responses: {
                200: {
                    description: 'Lista de URLs do usuário',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: {
                                    $ref: '#/components/schemas/Url'
                                }
                            }
                        }
                    }
                },
                401: {
                    $ref: '#/components/responses/Unauthorized'
                },
                404: {
                    description: 'Nenhuma URL encontrada para este usuário',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    error: {
                                        type: 'object',
                                        description: 'Objeto de erro completo do Mongoose'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}