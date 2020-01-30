# GraphQL Demo App 
> Fusemachines Knowledge Sharing Session

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [References](#references)

## Introduction
This app is intended to demo the implementation of GraphQL in both server and client side. MongoDB has been used as a database, Node.js has been used to create an api server and Reactjs has been used to create the frontend application.

## Prerequisites
Before you get started please make sure that you have the following properly installed in your computer:
- Git
- Node.js
- MongoDB

## Installation
To get started, clone the repo and cd into the cloned directory:
```
> git clone https://github.com/pragyakar/fm-graphql-demo.git
> cd fm-graphql-demo
```

### Setup Database
Create a database using mongo and copy the url of your database. Create a file to store your environment variables named '.env' inside the node-server directory.

```
> cd node-server
> nano .env
```
Inside .env file, add the url of your database in DB_AUTH_SOURCE variable.
```
DB_AUTH_SOURCE=mongodb://localhost/example
```

### Setup Node Server
If you are not inside the node-server directory, cd into the directory. Install the dependencies using your preferred package manager. 
```
> cd node-server
> yarn
or 
> npm install
```
Start the app using the run script. Logs stating that you the server is running and is connected to the database will appear if you have properly setup the app.
```
> yarn start
or 
> npm run start
```

### Setup React App

## References 
- [Gitmoji: Commit message emoji reference](https://gitmoji.carloscuesta.me/)