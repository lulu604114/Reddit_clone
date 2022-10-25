import { Flex, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { HiHome } from 'react-icons/hi'

const CommunitySelected = () => {
  return (
    <Flex
      gap='1'
      align='center'
    >
      <Icon
        as={HiHome}
        fontSize='22'
        color='blackAlpha.800'
      />
      <Text
        fontSize='14'
        color='blackAlpha.800'
        display={{
          base: 'none',
          lg: 'block'
        }}
      >
        Home
      </Text>
    </Flex>
  )
}

export default CommunitySelected
