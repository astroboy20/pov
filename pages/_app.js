import "@/styles/globals.css";
import { GlobalStyles, theme } from "@/theme";
import { ThemeProvider } from "styled-components";
import { Poppins } from "next/font/google";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OptionProvider } from "@/context/option-context";
import { ChakraProvider } from "@chakra-ui/react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/feature/store";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <OptionProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ToastContainer />
        <ChakraProvider>
          <main className={poppins.className}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                  <Component {...pageProps} />
                  <ReactQueryDevtools initialIsOpen={true} />
                </QueryClientProvider>
              </PersistGate>
            </Provider>
          </main>
        </ChakraProvider>
      </ThemeProvider>
    </OptionProvider>
  );
}
