# Hello there!

> This page covers the backend part of the project. You can view the frontend by clicking [here](https://github.com/vitorbcc2021/url-shortener-frontend).

This is my **URL shortener** - a project developed in Node.js and Express for learning purposes!

Node.js is excellent for passionate JavaScript beginners in **Web Development** due to its modular architecture, enabling developers to create deployable code and connect with a large community dedicated to mutual support.

This project allows clients to register and **manage** all their shortened URLs. They can perform operations such as: creating, editing, and deleting URLs. To access a URL, users should visit the corresponding shortened address.

## 🧑🏻‍💻 Dependencies
This software was developed using:  

- **bcrypt 6.0.0**: Encrypts user passwords  
- **cors 2.8.5**: Handles cross-origin requests  
- **dotenv 17.0.1**: Supports environment variables  
- **express 5.1.0**: Routing, middleware, and navigation system  
- **hyperdyperid 1.2.0**: Generates unique IDs for shortened URLs  
- **jsonwebtoken 9.0.2**: JWT for authentication and role management  
- **mongoose 8.16.1**: MongoDB driver for database communication  
- **swagger-jsdoc 6.2.8**: Generates OpenAPI specification from JSDoc comments  
- **swagger-ui-express 5.0.1**: Serves Swagger UI through Express routing  

The project was deployed on: [render.com](https://render.com)  

## 📄 Documentation - Swagger
<img src='./docs/assets/swagger-seeklogo.png' width='550px'>  

This software uses Swagger framework for documentation.  
Swagger provides a sophisticated way to explore and test application endpoints.  

You can access the API documentation at:  
[https://url-shortener-1x3f.onrender.com/api-docs/](https://url-shortener-1x3f.onrender.com/api-docs/)  

## 📝 Final Considerations (and Improvements)
This project primarily focused on implementing JWT, role management, deployment, Swagger, and expanding my JavaScript ecosystem knowledge including dependencies, package management, best practices, and syntax.  

The URL shortening implementation itself wasn't the main focus. Here's my improvement roadmap:  
- Improve shortening technique to support unlimited links (currently capped at 10,000)  
- Implement custom domains: auto-generated Render URLs can sometimes exceed original URL length  