import { extendTheme } from '@chakra-ui/react'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'
import Button from './styled/button'
import Input from './styled/input'

const theme = extendTheme({
  colors: {
    brand: {
      100: '#FF3c00',
    },
  },
  fonts: {
    body: 'Open Sans, sans-serif'
  },
  styles: {
    global: () => ({
      body: {
        bg: 'gray.200'
      }
    })
  },
  components: {
    Button,
    Input
  }
})

export default theme
