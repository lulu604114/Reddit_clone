import { IconButton } from '@chakra-ui/react'
import { IoVideocamOutline } from 'react-icons/io5'

const AddVideo = () => {
  return (
    <IconButton
      aria-label='Add a video'
      icon={<IoVideocamOutline />}
      variant='square'
      size='sm'
      fontSize='20'
    />
  )
}

export default AddVideo
