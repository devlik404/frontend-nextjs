
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    colors: {
      goldenGradient: "linear(to-r, var(--Golden, #94783E), var(--Golden, #F3EDA6), var(--Golden, #F8FAE5), var(--Golden, #FFE2BE), var(--Golden, #D5BE88), var(--Golden, #F8FAE5), var(--Golden, #D5BE88))",
     
    },
  },
});

export default theme;
