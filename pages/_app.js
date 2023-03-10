import "@/styles/globals.css";
import { ThemeProvider } from "../context/theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
