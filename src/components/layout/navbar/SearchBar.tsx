import { Flex } from '@chakra-ui/react'
import SearchInput from '../../ui/inputs/SearchInput'

const SearchBar = () => {
  return (
    <Flex
      height='100%'
      align='center'
      flexGrow='1'
    >
      <SearchInput />
    </Flex>
  )
}

export default SearchBar
