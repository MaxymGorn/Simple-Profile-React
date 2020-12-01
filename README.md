# Simple profile-project

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode (http://localhost:3000/, default port 3000; If you want to change the port, you need to open the file webpack.config.js and find "port" and change its value in the module settings -> devServer -> port):

```sh
npm start
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

Open the file `dist/index.html` in your browser
