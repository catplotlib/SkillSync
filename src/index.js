import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "jotai";
import { GoogleOAuthProvider } from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="441480199899-pap52svou47u6dicik2n43l9ib85us3t.apps.googleusercontent.com">
      <ChakraProvider>
        <Provider>
          <App />
        </Provider>
      </ChakraProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
