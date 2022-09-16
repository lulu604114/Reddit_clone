import { ComponentStyleConfig } from '@chakra-ui/theme'

const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      fontsize: '10pt',
    }
  },
  variants: {
    outline: {
      field: {
        bg: 'gray.50',
        _placeholder: {
          color: 'gray.500'
        },
        _focus: {
          boxShadow: 'unset',
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500'
        },
        _hover: {
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500'
        }
      }
    }
  }
}

export default Input

