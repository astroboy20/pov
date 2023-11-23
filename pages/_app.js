import "@/styles/globals.css";
import { GlobalStyles, theme } from "@/theme";
import { ThemeProvider } from "styled-components";
import { Poppins } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/feature/store";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer/>
      <main className={poppins.className}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </main>
    </ThemeProvider>
  );
}
