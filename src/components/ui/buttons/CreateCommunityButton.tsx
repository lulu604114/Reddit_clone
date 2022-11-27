import { IconButton } from '@chakra-ui/react'
import { VscAdd } from 'react-icons/vsc'

const CreateCommunityButton = () => {
  return (
    <IconButton
      aria-label='Create a new community'
      icon={<VscAdd />}
      variant='squareIcon'
      size='sm'
    />
  )
}

export default CreateCommunityButton
