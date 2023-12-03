import "@/styles/globals.css";
import { GlobalStyles, theme } from "@/theme";
import { ThemeProvider } from "styled-components";
import { Poppins } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/feature/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OptionProvider } from "@/context/option-context";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <OptionProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ToastContainer />
          <main className={poppins.className}>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </main>
        </ThemeProvider>
      </OptionProvider>
    </LocalizationProvider>
  );
}
