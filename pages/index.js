import Head from "next/head";

// Components
import Landing from "../components/Landing";

// Contexts
import CoinsContextProvider from "../contexts/CoinsContextProvider";

// Style
import Background from "../components/Background";

const App = () => {
  return (
    <CoinsContextProvider>
      <Head>
        <title>Crypto App</title>
        <meta
          name="description"
          content="Here is a precise description of my awesome webpage."
        />
        <meta
          name="keywords"
          content="React, Next, Crypto, Cryptocurrency, Vercel"
        />
        <meta name="author" content="Alireza Zahiri" />
      </Head>
      <Landing />
      <Background />
    </CoinsContextProvider>
  );
};

export default App;
