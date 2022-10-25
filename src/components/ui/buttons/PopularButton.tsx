import { IconButton } from '@chakra-ui/react'
import { BsArrowUpRightCircle } from 'react-icons/bs'

const PopularButton = () => {
  return (
    <IconButton
      aria-label='Most popular post'
      icon={<BsArrowUpRightCircle />}
      variant='square'
      size='sm'
      fontSize='20'
    />
  )
}

export default PopularButton
