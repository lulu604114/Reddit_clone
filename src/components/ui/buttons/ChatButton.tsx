import { IconButton } from '@chakra-ui/react'
import { BsChatDots } from 'react-icons/bs'

const ChatButton = () => {
  return (
    <IconButton
      aria-label='Open the chat'
      icon={<BsChatDots />}
      variant='square'
      size='sm'
      fontSize='20'
    />
  )
}

export default ChatButton
