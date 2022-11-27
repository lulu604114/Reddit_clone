import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../../firebase/clientApp'
import LogoutMenuItem from './LogoutMenuItem'
import LoginMenuItem from './LoginMenuItem'

const AuthActionsMenuItem = () => {
  const [ user ] = useAuthState(auth)

  return (
    <>
      {user && <LogoutMenuItem />}
      {!user && <LoginMenuItem />}
    </>
  )
}

export default AuthActionsMenuItem
