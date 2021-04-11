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
