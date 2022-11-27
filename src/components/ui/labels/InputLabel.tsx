import { Box, Text } from '@chakra-ui/react'
import LabelProps from '../../../types/LabelProps'

const InputLabel = ({ label, subLabel }: LabelProps) => {
  return (
   <Box mb={3}>
     <Text fontWeight='semibold'>{ label }</Text>
     <Text
       fontSize='xs'
       color='gray.500'
     >
       { subLabel }
     </Text>
   </Box>
  )
}

export default InputLabel

