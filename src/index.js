import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/App";
import { theme } from "./theme/theme";
import { ReactQueryDevtools } from "react-query/devtools";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./context/userContext";
import { ApiProvider } from "./context/apiContext";
import SimpleReactLightbox from "simple-react-lightbox";

const queryClient = new QueryClient();

const LoadPage = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ApiProvider>
          <SimpleReactLightbox>
            <App />
          </SimpleReactLightbox>
        </ApiProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </ChakraProvider>
);

ReactDOM.render(<LoadPage />, document.getElementById("root"));
