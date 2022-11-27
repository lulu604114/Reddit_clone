import { Button, Flex } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import { createCommunityModalState } from '../../../store/atoms/ModalState'

interface Props {
  onSubmit(): void,
}

const CommunityFormActions = ({ onSubmit }: Props) => {
  const setOpen = useSetRecoilState(createCommunityModalState)

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <Flex
      gap='2'
      justifyContent='flex-end'
      px='6'
      py='4'
      bgColor='gray.200'
    >
      <Button
        onClick={handleCancel}
        variant='outline'
        height='32px'
      >
        Cancel
      </Button>
      <Button
        onClick={onSubmit}
        variant='solid'
        height='32px'
      >
        Create a Community
      </Button>
    </Flex>
  )
}

export default CommunityFormActions
