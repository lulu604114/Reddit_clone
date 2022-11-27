import { useRecoilState } from 'recoil'
import { authModalState } from '../../../../store/atoms/ModalState'
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
      isCentered
      size='sm'
    >
      <ModalOverlay />
      <ModalContent height='75vh'>
        <ModalCloseButton />
        <ModalBody
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <AuthModalContent view={view} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AuthModal
