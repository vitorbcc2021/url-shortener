export default {
    Unauthorized: {
        description: 'Acesso não autorizado!',
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/Error'
                }
            }
        }
    },
    Forbidden: {
        description: 'Acesso proibido',
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/Error'
                }
            }
        }
    },
    NotFound: {
        description: 'Recurso não encontrado',
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/Error'
                }
            }
        }
    },
    ValidationError: {
        description: 'Houve um erro na validação',
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/Error'
                }
            }
        }
    }
}