import { ComponentStyleConfig } from '@chakra-ui/theme'

const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '9999px',
    fontSize: '10pt',
    fontWeight: 700,
    _focus: {
      boxShadow: 'none'
    },
  },
  sizes: {
    sm: {
      fontSize: '8pt'
    },
    md: {
      fontSize: '10pt'
    }
  },
  variants: {
    solid: {
      color: 'white',
      bg: 'blue.500',
      _hover:{
        bgColor:'blue.400',
      }
    },
    outline: {
      color: 'blue.500',
      border: '1px solid',
      borderColor: 'blue.500',
    },
    oauth: {
      border: '1px solid',
      borderColor: 'gray.300',
      _hover: {
        bg: 'gray.50'
      }
    }
  }
}

export default Button
