import { IconButton } from '@chakra-ui/react'
import { BsFilterCircle } from 'react-icons/bs'

const FilterPostButton = () => {
  return (
    <IconButton
      aria-label='Filter posts'
      icon={<BsFilterCircle />}
      variant='square'
      size='sm'
      fontSize='20'
    />
  )
}

export default FilterPostButton
