import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  console.log("ASUss");
  return (
    <Html lang="en">
      <Head>
        <Script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        ></Script>
      </Head>
      <body>
        <div>woIEFBABI</div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
