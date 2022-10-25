import { FIREBASE_ERRORS } from '../firebase/errors'

const useGetFirebaseError = () => {
  const getFirebaseError = (error: any) => {
    return FIREBASE_ERRORS[error.message as keyof typeof FIREBASE_ERRORS]
  }

  return [ getFirebaseError ]
}

export default useGetFirebaseError
