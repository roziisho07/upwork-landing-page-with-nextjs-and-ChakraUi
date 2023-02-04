"use client";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#E3ECE3",
      100: "#108a00",
      200: "#3c8224",
      300: "#14a800",
      400: "#108a00",

      900: "#001e00",
    },
  },
});

function ChakraWrapper({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default ChakraWrapper;
