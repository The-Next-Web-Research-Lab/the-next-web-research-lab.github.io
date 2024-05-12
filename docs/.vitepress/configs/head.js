export default [
  [
    'script',
    {
      async: '',
      src: 'https://www.googletagmanager.com/gtag/js?id=G-D8DGV9TS3G'
    }
  ],
  [
    'script',
    {},
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-D8DGV9TS3G');`
  ],
  [
    'script',
    {
      async: true,
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2063927113913779",
      crossorigin: "anonymous"
    }
  ],
  [
    'link',
    {
      rel: "stylesheet",
      as: "style",
      crossorigin: true,
      href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.7/dist/web/static/pretendard.css"
    }
  ],
  [
    'link', {
      rel: "apple-touch-icon",
      sizes: "57x57",
      href: "/images/apple-icon-57x57.png"
    }
  ],
  [
    'link', {
      rel: "apple-touch-icon",
      sizes: "60x60",
      href: "/images/apple-icon-60x60.png"
    }
  ],
  [
    'link', {
      rel: "apple-touch-icon",
      sizes: "72x72",
      href: "/images/apple-icon-72x72.png"
    }
  ],
  [
    'link', {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: "/images/apple-icon-76x76.png"
    }
  ],
  [
    'link', {
      rel: "apple-touch-icon",
      sizes: "114x114",
      href: "/images/apple-icon-114x114.png"
    }
  ],
  [
    'link', {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "/images/apple-icon-120x120.png"
    }
  ],
  [
    'link', {
      rel: "apple-touch-icon",
      sizes: "144x144",
      href: "/images/apple-icon-144x144.png"
    }
  ],
  [
    'link', {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "/images/apple-icon-152x152.png"
    }
  ],
  [
    'link', {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/images/apple-icon-180x180.png"
    }
  ],
  [
    'link', {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "/images/android-icon-192x192.png"
    }
  ],
  [
    'link', {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/images/favicon-32x32.png"
    }
  ],
  [
    'link', {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "/images/favicon-96x96.png"
    }
  ],
  [
    'link', {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/images/favicon-16x16.png"
    }
  ],
  [
    'meta',
    {
      name: 'google-site-verification',
      content: 'AQgb7qIvzY8UNdV_dzzcCI1ofNUSeJeBRgf-IAajJO0'
    }
  ],
  [
    'meta',
    {
      name: 'google-adsense-account',
      content: 'ca-pub-2063927113913779'
    }
  ]
]