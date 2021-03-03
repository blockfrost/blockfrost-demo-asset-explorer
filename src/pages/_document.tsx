import React from "react";

import Document, {
  Html,
  Main,
  NextScript,
  Head,
  DocumentContext,
} from "next/document";

class MainDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            id="ze-snippet"
            src="https://static.zdassets.com/ekr/snippet.js?key=a0ff99fa-0608-4825-b70d-16a2cd918a39"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MainDocument;
