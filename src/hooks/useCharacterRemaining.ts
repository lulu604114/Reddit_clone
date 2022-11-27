import { useMemo } from 'react'

const useCharacterRemaining = (maxCharacters: number, value: string) => {
  return useMemo(() => {
    if (value && maxCharacters > 0) {
      return maxCharacters - value.length
    }

    return maxCharacters
  }, [ maxCharacters, value ])
}

export default useCharacterRemaining
