import { Flex, Text } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/clientApp'
import Avatar from './Avatar'
import { Icon } from '@chakra-ui/icons'
import { IoSparkles } from 'react-icons/io5'

const CurrentUserInfo = () => {
  const [ user ] = useAuthState(auth)

  return (
    <Flex
      gap='2'
      pr={{
        base:'0',
        xl: '6'
      }}
    >
      <Avatar />
      <Flex
        mt='1'
        flexDirection='column'
        display={{
          base: 'none',
          xl: 'flex'
        }}
      >
        <Text
          fontSize='12'
          color='blackAlpha.800'
        >
          {user?.displayName}
        </Text>
        <Flex
          alignItems='center'
          gap='1'
        >
          <Icon
            as={IoSparkles}
            color='brand.100'
          />
          <Text
            fontSize='11'
            color='gray.300'
          >
            7 Karmas
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default CurrentUserInfo
