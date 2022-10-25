import { defineStyleConfig } from '@chakra-ui/react'

const Button = defineStyleConfig({
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
    },
    square: {
      borderRadius: '5px',
      _hover: {
        bg: 'gray.100'
      }
    },
    dropDown: {
      px: {
        base: 2,
          lg: 2,
          xl: 3
      },
      borderColor:'white',
      color:'gray.500',
      borderRadius:'5px',
      _hover: {
        bgColor: 'white',
        border: '1px solid',
        borderColor: 'gray.100'
      },
      _active: {
        bgColor: 'white',
        border: '1px solid',
        borderColor: 'gray.100'
      }
    }
  }
})

export default Button
