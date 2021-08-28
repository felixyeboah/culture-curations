import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link href='/favicon.ico' rel='shortcut icon' />
          <link href='/static/favicons/site.webmanifest' rel='manifest' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;800;900&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
          <link href='/favicon.ico' rel='apple-touch-icon' sizes='180x180' />
          <link href='/favicon.ico' rel='icon' sizes='32x32' type='image/png' />
          <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
          <meta content='#ffffff' name='theme-color' />
          <meta content='#ffffff' name='msapplication-TileColor' />
          <meta
            content='/static/favicons/browserconfig.xml'
            name='msapplication-config'
          />
          <meta content='14d2e73487fa6c71' name='yandex-verification' />
          <meta
            content='eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw'
            name='google-site-verification'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
