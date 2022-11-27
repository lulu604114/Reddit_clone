import { InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Flex, Text } from '@chakra-ui/react'
import useCharacterRemaining from '../../../hooks/useCharacterRemaining'
import ValueChangeEvent from '../../../types/valueChangeEvent'
import { Input, CustomInputProps } from '../../../chakra/custom/Input'

interface Props extends Omit<CustomInputProps, 'type'> {
  maxCharacters?: number
}

const CommunityNameInput = ({ name, value, onChange, maxCharacters = 0, ...otherProps }: Props) => {
  const charactersRemain = useCharacterRemaining(maxCharacters, value)

  const handleOnchange = (event: ValueChangeEvent<string>) => {
    const { value } = event

    if (maxCharacters !== 0 && value.length >= maxCharacters) return

    onChange(event)
  }

  return (
    <Flex
      flexDirection='column'
      gap='3'
    >
      <InputGroup variant='communityName'>
        <InputLeftElement>r/</InputLeftElement>
        <Input
          onChange={handleOnchange}
          type='text'
          value={value}
          name={name}
          {...otherProps}
        />
      </InputGroup>
      {maxCharacters !== 0 && (
        <Text
          fontSize='xs'
          color='gray.500'
        >
          {`${charactersRemain} characters remaining`}
        </Text>
      )}
    </Flex>
  )
}

export default CommunityNameInput
