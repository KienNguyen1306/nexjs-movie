// components/ExternalScript.js
import Script from "next/script";

const ExternalScript = () => (
  <Script
    src="https://your-script-url.com"
    strategy="beforeInteractive"
    crossorigin="anonymous"
  />
);

export default ExternalScript;
