import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  shadows: {
    outline: '#fff',
  },
  styles: {
    global: () => ({
      body: {
        bg: 'blackAlpha.300',
      },
    }),
  },
  colors: {
    btbets: {
      50: '#3301ff', // Main color
      100: '#3301ff', // Main color
      200: '#3301ff', // Main color
      300: '#3301ff', // Main color
      400: '#3301ff', // Main color
      500: '#3301ff', // Main color
      600: '#3301ff', // Main color
      700: '#3301ff', // Main color
      800: '#3301ff', // Main color
      900: '#3301ff', // Main color
    },
  },
  components: {
    Button: {
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        'red-gradient': {
          fontFamily: 'heading',
          bgGradient: 'linear(to-r, red.400,red.600)',
          color: 'white',
          _hover: {
            bgGradient: 'linear(to-r, red.400,red.600)',
            boxShadow: 'xl',
          },
          _active: {
            bgGradient: 'linear(to-r, red.600,red.800)',
            boxShadow: 'xl',
          },
        },
      },
    },
  },
});
export default theme;
