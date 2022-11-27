import { IconButton } from '@chakra-ui/react'
import { BsChatDots } from 'react-icons/bs'

const ChatButton = () => {
  return (
    <IconButton
      aria-label='Open the chat'
      icon={<BsChatDots />}
      variant='squareIcon'
      size='sm'
    />
  )
}

export default ChatButton
