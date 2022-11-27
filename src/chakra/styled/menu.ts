import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { menuAnatomy } from '@chakra-ui/anatomy'

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys)

const Menu = defineMultiStyleConfig({
  baseStyle: {
    item: {
      fontSize: '14',
      '& > .chakra-menu__icon-wrapper': {
        display: 'flex',
        fontSize: '20'
      }
    }
  },
  variants: {
    community: {
      groupTitle: {
        fontSize: '10',
        fontWeight: '500',
        color: 'gray.500',
        textTransform: 'uppercase'
      },
    },
    userMenu: {

    }
  }
})

export default Menu

