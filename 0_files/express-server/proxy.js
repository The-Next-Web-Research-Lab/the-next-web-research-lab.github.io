const {
  createProxyMiddleware,
  fixRequestBody,
  responseInterceptor,
} = require("http-proxy-middleware");

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
