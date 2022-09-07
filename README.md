# invoice-server

need to run: << nodemon --exec npm run babel-node --src/index.js >>  comand to configure nodemon with babel
local: "start": "nodemon --inspect --exec babel-node src/index.js",


//////// package json:
{
  "name": "invoice-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    
    "start": "babel-node src/index.js",
    "start": "nodemon --inspect --exec babel-node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src/index.js -d build",
    "babel-node": "babel-node --presets='@babel/preset-env' --ignore='foo|bar|baz'"
  },
  "author": "AZ",
  "license": "ISC",
  "dependencies": {
    "@sendgrid/mail": "^7.6.2",
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.0",
    "cores": "^0.8.5",
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "express-jwt": "^7.7.1",
    "express-validator": "^6.14.0",
    "jsonwebtoken": "^8.5.1",
    "lodash": "^4.17.21",
    "mongoose": "^6.3.3",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.17.10",
    "@babel/core": "^7.17.10",
    "@babel/node": "^7.17.10",
    "@babel/preset-env": "^7.17.10",
    "eslint": "^8.15.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.0.0",
    "prettier": "2.6.2"
  }
}
