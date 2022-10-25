import { defineStyleConfig } from '@chakra-ui/react'

const Input = defineStyleConfig({
  baseStyle: {
    field: {
      fontsize: '10pt',
    }
  },
  variants: {
    outline: {
      field: {
        borderRadius: '9999px',
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
    },
    solid: {
      field: {
        height: '30px',
        fontSize: '10pt',
        borderRadius: '1px',
        bg: 'gray.100',
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
})

export default Input

