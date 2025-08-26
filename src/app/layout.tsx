import "./globals.css";
// import { GlobalStyles, theme } from "@/theme";
// import { ThemeProvider } from "styled-components";
import { Darker_Grotesque, Poppins } from "next/font/google";
// import { Provider } from "react-redux";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { OptionProvider } from "@/context/option-context";
// import { ChakraProvider } from "@chakra-ui/react";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistor, store } from "@/feature/store";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const darker_grotesque = Darker_Grotesque({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

// const queryClient = new QueryClient();
export default function App({ children }: { children: React.ReactNode }) {
  // return (
  //   <html>
  //     <body>
  //       <OptionProvider>
  //           <ToastContainer />
  //             <main className={poppins.className}>
  //               <Provider store={store}>
  //                 <PersistGate loading={null} persistor={persistor}>
  //                   <QueryClientProvider client={queryClient}>
  //                     {children}
  //                     {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  //                   </QueryClientProvider>
  //                 </PersistGate>
  //               </Provider>
  //             </main>
  //       </OptionProvider>
  //     </body>
  //   </html>
  // );
  return (
    <html lang="en" className={`${darker_grotesque.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
