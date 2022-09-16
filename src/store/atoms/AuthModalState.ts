import { atom } from 'recoil'
import { AuthModalViews } from '../../models/types/AuthModalViews'

interface AuthModalState {
  open: boolean,
  view: AuthModalViews
}

const defaultAuthModalState: AuthModalState = {
  open: false,
  view: 'login'
}

const authModalState = atom<AuthModalState>({
  key: 'authModalState',
  default: defaultAuthModalState
})

export default authModalState
