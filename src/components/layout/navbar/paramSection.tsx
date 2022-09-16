import { Flex } from '@chakra-ui/react'
import UserDropDown from '../../ui/dropDowns/UserDropDown'

const ParamSection = () => {
  return (
    <Flex
      align='center'
      ml='2'
    >
      <UserDropDown />
    </Flex>
  )
}

export default ParamSection
