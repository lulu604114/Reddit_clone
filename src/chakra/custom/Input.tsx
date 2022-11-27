import { Input as ChakraInput, InputProps } from '@chakra-ui/input'
import ValueChangeEvent from '../../types/valueChangeEvent'
import { ChangeEvent } from 'react'

export interface CustomInputProps extends Omit<InputProps, 'value' | 'onChange' | 'name'> {
  name: string,
  value: string,
  onChange(event: ValueChangeEvent<string>): void
}

const Input = ({ name, value, onChange, ...otherProps }: CustomInputProps) => {

  const handleOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({
      name,
      value: event.target.value
    })
  }

  return (
    <ChakraInput
      value={value}
      name={name}
      onChange={handleOnchange}
      {...otherProps}
    />
  )
}

export {
  Input
}
