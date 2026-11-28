import swaggerJsdoc from 'swagger-jsdoc'

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Posts API',
            version: '1.0.0',
            description: 'CRUD API для постов',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
            },
        ],
        components: {
            schemas: {
                Post: {
                    type: 'object',
                    properties: {
                        _id: { type: 'string', example: '664f1a2b3c4d5e6f7a8b9c0d' },
                        title: { type: 'string', example: 'Мой пост' },
                        content: { type: 'string', example: 'Текст поста' },
                        picture: { type: 'string', example: 'filename.jpg' },
                    },
                },
            },
        },
    },
    apis: ['./router.js'],
}

export default swaggerJsdoc(options)
