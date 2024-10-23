/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const next = require("next");

const hostname = "localhost";
const port = 3000;
const dev = true;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const devProxy = {
    "/blackhistory-proxy": {
        target: "https://rest.blackhistoryapi.io",
        pathRewrite: { "^/blackhistory-proxy": "/" },
        changeOrigin: true,
    },
    "/chatgpt/": {
        target: "https://api.openai.com/v1/engines/davinci-codex/completions",
        pathRewrite: { "^/chatgpt/": "/" },
        changeOrigin: true,
    },
    "/oak/": {
        target: "https://open-api.thenational.academy/api/v0/",
        pathRewrite: { "^/oak/": "/" },
        changeOrigin: true,
    },    
    "/cdn": {
        target: "https://cdn.mytutor.co.uk",
        pathRewrite: { "^/cdn": "/" },
        changeOrigin: true,
    },
    "/cdn-prod": {
        target: "https://cdn-prod.mytutor.co.uk",
        pathRewrite: { "^/cdn-prod": "/" },
        changeOrigin: true,
    },
};

// const useProxy = true;

app.prepare().then(() => {
    const server = express();
    server.disable("x-powered-by");

    const { createProxyMiddleware } = require("http-proxy-middleware");
    Object.keys(devProxy).forEach(function (context) {
        server.use(context, createProxyMiddleware(devProxy[context]));
    });

    server.all("*", (req, res) => handle(req, res));

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
