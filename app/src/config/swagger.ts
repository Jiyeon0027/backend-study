import path = require("path");
import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Swagger API Docs",
      version: "1.0.0",
      description: " Swagger test document for backend study",
    },
    host: "localhost:3000",
    basePath: "/",
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: [path.resolve(__dirname, "../routers/api/**/*.js")],
};

console.log(options.apis);

const specs = swaggerJsdoc(options);

export default specs;
