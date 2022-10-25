import { Flex } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebase/clientApp'
import CommunityDropDown from '../../ui/menus/CommunityDropDown'

const CommunitySection = () => {
  const user = useAuthState(auth)

  if (!user) {
    return <></>
  }

  return (
    <Flex align='center'>
      <CommunityDropDown />
    </Flex>
  )
}

export default CommunitySection
