import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebase/clientApp'
import { Box, Divider, Flex } from '@chakra-ui/react'
import PopularButton from '../../ui/buttons/PopularButton'
import CreateCommunityButton from '../../ui/buttons/CreateCommunityButton'
import ChatButton from '../../ui/buttons/ChatButton'
import FilterPostButton from '../../ui/buttons/FilterPostButton'
import AddVideo from '../../ui/buttons/AddVideo'
import NotificationsButton from '../../ui/buttons/NotificationsButton'

const UserActions = () => {
  const user = useAuthState(auth)

  if (!user) {
    return <></>
  }

  return (
    <Flex align='center'>
      <Flex gap='2'>
        <Flex
          className='left_icons'
          gap='2'
          display={{
            base: 'none',
            lg: 'flex'
          }}
        >
          <PopularButton />
          <FilterPostButton />
          <AddVideo />
        </Flex>
        <Box
          as='span'
          height='8'
          display={{
            base: 'none',
            lg: 'block'
          }}
        >
          <Divider orientation='vertical'></Divider>
        </Box>
        <Flex
          className='right_icons'
          gap='2'
        >
          <ChatButton />
          <NotificationsButton />
          <CreateCommunityButton />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default UserActions
