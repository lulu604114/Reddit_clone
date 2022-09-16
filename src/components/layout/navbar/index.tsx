import { Flex } from '@chakra-ui/react'
import MainLogo from './MainLogo'
import SearchBar from './SearchBar'
import AuthActions from './AuthActions'
import ParamSection from './paramSection'

const NavBar = () => {
  return (
    <header>
      <Flex
        bg='white'
        height='48px'
        px='5'
      >
        <MainLogo />
        <SearchBar />
        <AuthActions />
        <ParamSection />
      </Flex>
    </header>
  )
}

export default NavBar
