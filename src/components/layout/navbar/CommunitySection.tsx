import { Flex } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebase/clientApp'
import CommunityMenu from '../../ui/menus/CommunityMenu'

const CommunitySection = () => {
  const [ user ] = useAuthState(auth)

  if (!user) {
    return <></>
  }

  return (
    <Flex align='center'>
      <CommunityMenu />
    </Flex>
  )
}

export default CommunitySection
