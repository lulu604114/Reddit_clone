import { Input } from '@chakra-ui/input'
import { Box } from '@chakra-ui/react'

const CommunityListFilterInput = () => {
  return (
    <Box px='2'>
      <Input
        placeholder='Filter'
        width='100%'
        variant='communityFilter'/>
    </Box>
  )
}

export default CommunityListFilterInput
