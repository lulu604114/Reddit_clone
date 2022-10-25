import { Flex } from '@chakra-ui/react'
import MainLogo from './MainLogo'
import SearchBar from './SearchBar'
import AuthActions from './AuthActions'
import ParamSection from './ParamSection'
import UserActions from './UserActions'
import CommunitySection from './CommunitySection'

const NavBar = () => {
  return (
    <header>
      <Flex
        bg='white'
        height='48px'
        px='5'
        gap='2'
      >
        <MainLogo />
        <CommunitySection />
        <SearchBar />
        <UserActions />
        <AuthActions />
        <ParamSection />
      </Flex>
    </header>
  )
}

export default NavBar
