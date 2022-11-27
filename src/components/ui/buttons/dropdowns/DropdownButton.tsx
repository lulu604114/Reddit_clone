import { Button, ButtonProps, forwardRef } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { ForwardedRef } from 'react'

// Dropdown button use to trigger menu
const DropdownButton = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <Button
      variant='dropDown'
      ref={ref}
      rightIcon={<ChevronDownIcon fontSize='22'/>}
      {...props}
    />
  )
})

export default DropdownButton
