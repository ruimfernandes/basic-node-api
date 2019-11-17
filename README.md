# basic-node-api
Basic node api with a single GET and POST endpoint (data is stored on a variable, therefore new data is wiped on api restart).

## How to install
1. Make sure you have node.js installed
2. Run `npm i`
3. Run `npm start` and it should start running

## Existing endpoints
- `/user`
    - **GET** - Returns the variable `DUMMY_DATA` _(src/server/controllers/user/controller.js)_
    - **POST** - Adds data to the variable `DUMMY_DATA` _(src/server/controllers/user/controller.js)_. Returns the body provided throught the request.