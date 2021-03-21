import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import * as settings from './settings';
import * as database from './database';
// --------------------------------------------------------------------- Express Configuration
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/customer', require('./routes/customer'));
app.use('/note', require('./routes/note'));
app.use('/test', require('./routes/test'))

// --------------------------------------------------------------------- Swagger Configuration
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Spitfire API",
            version: settings.versionNumber,
            description:
                "This is a customer notation api",
        },
        components: {
                schemas: {
                    Success: {
                        type: 'array',
                        items: {
                            type: 'integer',
                            format: 'int32'
                        }
                    },
                    Note: {
                        type: 'object',
                        properties: {
                            id: {
                                type: 'integer',
                                format: 'int32'
                            },
                            customerId: {
                                type: 'integer',
                                format: 'int32'
                            },
                            noteContent: {
                                type: 'text'
                            },
                            createdAt: {
                                type: 'date-time'
                            },
                            updatedAt: {
                                type: 'date-time'
                            },
                        }
                    },
                    Notes: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Note'
                        }
                    },
                    NoteContent: {
                        type: 'object',
                        properties: {
                            noteContent: {
                                type: 'text'
                            },
                        }
                    },
                    Customer: {
                        type: 'object',
                        properties: {
                            id: {
                                type: 'integer',
                                format: 'int32'
                            },
                            identifier: {
                                type: 'integer',
                                format: 'int32'
                            },
                            firstName: {
                                type: 'string'
                            },
                            lastName: {
                                type: 'string'
                            },
                            phoneNum: {
                                type: 'string'
                            },
                            emailAdd: {
                                type: 'string'
                            },
                            createdAt: {
                                type: 'date-time'
                            },
                            updatedAt: {
                                type: 'date-time'
                            },
                            Status: {
                                type: 'object',
                                properties: {
                                    statusName: {
                                        type: 'string'
                                    }
                                }
                            }
                        }
                    },
                    Customers: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Customer'
                        }
                    },
                    Error: {
                        type: 'object',
                        properties: {
                            code: {
                                type: 'integer',
                                format: 'int32'
                            },
                            message: {
                                type: 'string'
                            }
                        }
                    }

                }
                },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./src/routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// --------------------------------------------------------------------- Sequelize Configuration
database.connection.authenticate().then(() => {
        console.log('Connection has been established successfully.');
        database.connection.sync().then(()=>{
            console.log('Database has synced successfully.');
        }).catch(error=>{
            res.status(500).send(error);
        });
}).catch(error=>{
    res.status(500).send(error);
});


// --------------------------------------------------------------------- App Start
export default app;
