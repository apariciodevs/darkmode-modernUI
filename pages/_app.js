import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from '@/components/Layout';
import { createClient, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";
import { mainnet } from "wagmi/chains";

const { provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);


const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});


function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}></SessionProvider>
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
    </WagmiConfig>

  );
}

export default MyApp;
