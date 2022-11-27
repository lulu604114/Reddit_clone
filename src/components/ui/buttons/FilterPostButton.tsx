import { IconButton } from '@chakra-ui/react'
import { BsFilterCircle } from 'react-icons/bs'

const FilterPostButton = () => {
  return (
    <IconButton
      aria-label='Filter posts'
      icon={<BsFilterCircle />}
      variant='squareIcon'
      size='sm'
    />
  )
}

export default FilterPostButton
