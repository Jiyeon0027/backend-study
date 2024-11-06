import path = require("path");

const options = {
  swaggerDefinition: {
    info: {
      title: "Swagger API Docs",
      version: "1.0.0",
      description: " Swagger test document ",
    },
    host: "localhost:3000",
    basePath: "/",
  },
  apis: [path.resolve(__dirname, "../routers/*.js")],
};

export default options;
