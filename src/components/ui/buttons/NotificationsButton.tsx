import { IconButton } from '@chakra-ui/react'
import { IoNotificationsOutline } from 'react-icons/io5'

const NotificationsButton = () => {
  return (
    <IconButton
      aria-label='Add a video'
      icon={<IoNotificationsOutline />}
      variant='squareIcon'
      size='sm'
    />
  )
}

export default NotificationsButton
