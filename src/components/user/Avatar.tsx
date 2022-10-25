import { Badge, Box, Image } from '@chakra-ui/react'

const Avatar = () => {
  return (
    <Box position='relative'>
      <Image
        src='/images/avatar.png'
        alt='avatar'
        py='1'
        height='40px'
      />
      <Badge
        position='absolute'
        bottom='3px'
        left='13px'
        variant='solid'
        colorScheme='green'
        width='1'
        height='3'
        borderRadius='9999px'
        borderColor='white'
        border='2px solid'
      />
    </Box>
  )
}

export default Avatar
