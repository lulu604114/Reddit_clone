import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, ModalHeader} from '@chakra-ui/modal'
import { Divider } from '@chakra-ui/react'
import CommunityForm from '../../../forms/community/CommunityForm'
import { useRecoilState } from 'recoil'
import { createCommunityModalState } from '../../../../store/atoms/ModalState'

const CreateCommunityModal = () => {
  const [ isOpen, setOpen ] = useRecoilState(createCommunityModalState)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      size='xl'
      isCentered
    >
      <ModalOverlay zIndex='1'/>
      <ModalContent
        overflow='hidden'
      >
        <ModalHeader
          as={'h1'}
          fontSize='12pt'
        >
          Create a community
        </ModalHeader>
        <ModalCloseButton />
        <Divider mx='6' width='unset'/>
        <ModalBody p='0'>
          <CommunityForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default CreateCommunityModal
