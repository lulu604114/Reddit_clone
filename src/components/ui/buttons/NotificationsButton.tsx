import { IconButton } from '@chakra-ui/react'
import { IoNotificationsOutline } from 'react-icons/io5'

const NotificationsButton = () => {
  return (
    <IconButton
      aria-label='Add a video'
      icon={<IoNotificationsOutline />}
      variant='square'
      size='sm'
      fontSize='20'
    />
  )
}

export default NotificationsButton
