import { Flex, Text } from '@chakra-ui/react'
import LabelProps from '../../../types/LabelProps'

const RadioLabel = ({ label, subLabel, icon }: LabelProps) => {
  return (
    <Flex align={'center'}>
      {icon}
      <Flex
        align={'flex-end'}
        gap={2}
      >
        <Text
          fontWeight='semibold'
          fontSize='sm'
        >
          { label }
        </Text>
        { subLabel && (
          <Text
            fontSize='xs'
            color='gray.500'
          >
            { subLabel }
          </Text>
        )}
      </Flex>
    </Flex>

  )
}

export default RadioLabel
