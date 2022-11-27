import { Radio, RadioGroup, RadioGroupProps } from '@chakra-ui/radio'
import { Stack } from '@chakra-ui/react'
import RadioLabel from '../labels/RadioLabel'
import { CommunityTypeRadio } from '../../../types/CommunityTypeRadio'
import ValueChangeEvent from '../../../types/valueChangeEvent'

interface Props extends Omit<RadioGroupProps, 'value' | 'onChange' | 'name' | 'children'>{
  name: string,
  value: string,
  onChange(event: ValueChangeEvent<string>): void
}

const CommunityTypeRadios = ({ name, value, onChange }: Props) => {
  const communityTypes: CommunityTypeRadio[] = [
    {
      label: 'Public',
      subLabel: 'Anyone can view, post, and comment to this community',
      value: 'public'
    },
    {
      label: 'Restricted',
      subLabel: 'Anyone can view this community, but only approved users can post',
      value: 'restricted'
    },
    {
      label: 'Private',
      subLabel: 'Only approved users can view and submit to this community',
      value: 'private'
    }
  ]

  const handleChange = (nextValue: string) => {
    onChange({
      name,
      value: nextValue
    })
  }

  return (
    <RadioGroup
      onChange={handleChange}
      value={value}
      name={name}
    >
      <Stack direction='column'>
        {communityTypes.map(({ label, subLabel, value }: CommunityTypeRadio, index: number) => (
          <Radio value={value} key={index}>
            <RadioLabel
              label={label}
              subLabel={subLabel}
            />
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  )
}

export default CommunityTypeRadios
