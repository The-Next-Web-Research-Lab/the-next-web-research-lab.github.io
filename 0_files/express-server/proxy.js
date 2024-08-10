const express = require("express");
const {
  createProxyMiddleware,
  fixRequestBody,
  responseInterceptor,
} = require("http-proxy-middleware");
const router = express.Router();

router.get("/home", (req, res) => {
  res.status(200).send("더넥스트웹리서치랩");
});

module.exports = {
  verifyAuth: (req, res, next) => {
    console.log("인증/인가 처리");
    next();
  },
  proxy: (req, res, next) => {
    createProxyMiddleware({
      target: "https://the-next-web-research-lab.github.io",
      pathRewrite: { [`^/proxy`]: "" },
      changeOrigin: true,
      timeout: 1000 * 5,
      onProxyReq: fixRequestBody,
      onProxyRes: responseInterceptor(async (responseBuffer) => responseBuffer),
      selfHandleResponse: true,
    })(req, res, next);
  },
};
