import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attibute='class'>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
