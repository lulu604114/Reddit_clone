import { Box, Checkbox, Flex, Text } from '@chakra-ui/react'
import InputLabel from '../../ui/labels/InputLabel'
import CommunityTypeRadios from '../../ui/radios/CommunityTypeRadios'
import CommunityForm from '../../../types/CommunityForm'
import { ChangeEvent } from 'react'
import ValueChangeEvent from '../../../types/valueChangeEvent'
import CommunityNameInput from '../../ui/inputs/CommunityNameInput'

interface Props {
  form: CommunityForm,
  onChange(event: ValueChangeEvent<string | boolean>): void
}

const CommunityFormFields = ({ form, onChange }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({
      name: event.target.name,
      value: event.target.checked
    })
  }

  return (
    <Flex
      flexDirection='column'
      gap={10}
      px='6'
      py='4'
    >
      <Box className='community-name'>
        <InputLabel
          label='Name'
          subLabel='Community names including capitalization cannot be changed.'
        />
        <CommunityNameInput
          name='name'
          value={form.name}
          onChange={onChange}
          maxCharacters={21}
        />
      </Box>
      <Flex
        flexDirection='column'
        gap={3}
        className='community-type'
      >
        <Text fontWeight='semibold'>Community type</Text>
        <CommunityTypeRadios
          name='type'
          value={form.type}
          onChange={onChange}
        />
      </Flex>
      <Flex
        flexDirection='column'
        gap={3}
        className='community-nsfw'>
        <Text fontWeight='semibold'>Adult Content</Text>
        <Checkbox
          isChecked={form.nsfw}
          onChange={handleChange}
          name='nsfw'
        >
          <Text fontWeight='semibold'>18+ year old community</Text>
        </Checkbox>
      </Flex>
    </Flex>
  )
}

export default CommunityFormFields
