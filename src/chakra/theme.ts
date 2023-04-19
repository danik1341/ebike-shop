import { extendTheme } from "@chakra-ui/react";

import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

export const theme = extendTheme({
  styles: {
    global: () =>({
        body: {
            backgroundImage:
            `linear-gradient(#FE6767 10%, transparent 0),` +
            `linear-gradient(rgba(0, 0, 0, 0.1) 1%, rgba(0, 0, 0, 0.1) 100%),` +
            "linear-gradient(white 0, transparent 0)",
            
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          width: '100%',
          boxSizing: "border-box",
        }
    })
  },
  fonts: {
    body: 'poppins',
  }
})

export default theme;
