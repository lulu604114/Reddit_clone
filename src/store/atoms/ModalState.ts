import { atom } from 'recoil'
import { AuthModalViews } from '../../models/types/AuthModalViews'

interface ModalState {
  open: boolean,
  view: AuthModalViews
}

const defaultAuthModalState: ModalState = {
  open: false,
  view: 'login'
}

const authModalState = atom<ModalState>({
  key: 'authModalStateKey',
  default: defaultAuthModalState
})

const createCommunityModalState = atom<boolean>({
  key: 'createCommunityModalStateKey',
  default: false
})

export {
  authModalState,
  createCommunityModalState
}
