import { useRecoilState } from 'recoil'
import authModalState from '../../../../store/atoms/AuthModalState'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/modal'
import AuthModalContent from './AuthModalContent'

const AuthModal = () => {
  const [{open, view}, setAuthModalState] = useRecoilState(authModalState)

  const handleClose = () => {
    setAuthModalState(state => ({
      ...state,
      open: false
    }))
  }

  return (
    <Modal
      isOpen={open}
      onClose={handleClose}
      size='4xl'
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        height='80%'
        overflow='hidden'
      >
        <ModalCloseButton />
        <ModalBody padding='0'>
          <AuthModalContent view={view} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AuthModal
