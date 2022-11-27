import { MenuItem } from '@chakra-ui/menu'
import { VscAdd } from 'react-icons/vsc'
import CreateCommunityModal from '../../modals/community/CreateCommunityModal'
import { useSetRecoilState } from 'recoil'
import { createCommunityModalState } from '../../../../store/atoms/ModalState'

const CreateCommunityMenuItems = () => {
  const setOpen = useSetRecoilState(createCommunityModalState)

  const handleClick = () => {
    setOpen(true)
  }

  return (
    <>
      <CreateCommunityModal  />
      <MenuItem
        icon={<VscAdd />}
        onClick={handleClick}
      >
        Create Community
      </MenuItem>
    </>
  )
}

export default CreateCommunityMenuItems
