import { Flex, Text, Divider } from '@chakra-ui/react'

const OrDivider = () => {
  return (
   <Flex
     flexDirection='row'
     alignItems='center'
     gap='4'>
     <Divider />
     <Text
       as='b'
       color='gray.300'>
       OU
     </Text>
     <Divider />
   </Flex>
  )
}

export default OrDivider
