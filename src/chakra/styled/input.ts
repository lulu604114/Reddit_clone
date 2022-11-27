import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { inputAnatomy } from '@chakra-ui/anatomy'

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys)


const Input = defineMultiStyleConfig({
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
    communityFilter: {
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
    },
    communityName: {
      field: {
        pl: 7,
        height: '35px',
        fontSize: '10pt',
        borderRadius: '5px',
        border: '1px solid',
        borderColor: 'gray.100',
        _placeholder: {
          color: 'gray.500'
        },
        _focus: {
          boxShadow: 'unset',
          outline: 'none',
          bg: 'white',
          border: '2px solid',
          borderColor: 'blue.500'
        }
      },
      element: {
        width: 0,
        pl: 5,
        color: 'gray.500',
        fontSize: '12pt'
      }
    }
  }
})

export default Input

