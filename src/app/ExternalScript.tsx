// components/ExternalScript.js
import Script from "next/script";

const ExternalScript = () => (
  <Script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6043051361671877"
    crossorigin="anonymous"
  />
);

export default ExternalScript;
