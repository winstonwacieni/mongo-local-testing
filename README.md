# MongoDB Local Testing

This repository contains a sample project that demonstrates how to test a local MongoDB installation with an Express server connection.

## Prerequisites

- Node.js and npm should be installed on your machine.
- MongoDB should be installed and running locally.

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/winstonwacieni/mongo-local-testing.git

2. Install the dependencies:

    ```shell
    cd mongo-local-testing
    npm install express typescript mongodb

## Usage
1. Start the Express server:

    ```shell
    node index.js
    ```
This will start the server on http://localhost:3000.

2. Access the endpoints:

GET /: Returns a "Hello World" message.
GET /data: Retrieves data from the MongoDB database.

## Configuration
Ensure that your MongoDB connection URL and database name are correctly set in the index.ts file:

    ```typescript
    const url = 'mongodb://localhost:27017';
    const dbName = 'mongo-test';
    ```
Update the values based on your MongoDB configuration.