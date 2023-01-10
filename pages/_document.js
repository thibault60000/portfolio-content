import Document, { Html, Head, NextScript, Main } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='fr-FR'>
        <Head></Head>
        <body className='font-poppins antialiased bg-white text-gray-900 tracking-tight'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
