import { useState } from 'react'
import CommunityForm from '../../../types/CommunityForm'
import CommunityFormFields from './CommunityFormFields'
import ValueChangeEvent from '../../../types/valueChangeEvent'
import CommunityFormActions from './CommunityFormActions'

interface Props {
  onCancel?(): void
}

const CommunityForm = ({ onCancel }: Props) => {
  const [ communityForm, setCommunityForm ] = useState<CommunityForm>({
    name: 'test',
    type: 'public',
    nsfw: false
  })

  const handleChange = (event: ValueChangeEvent<string | boolean>) => {
    setCommunityForm((state: CommunityForm) => ({
      ...state,
      [event.name]: event.value
    }))
  }

  const handleSubmit = () => {
    console.log(communityForm)
  }

  return (
    <>
      <CommunityFormFields form={communityForm} onChange={handleChange} />
      <CommunityFormActions onSubmit={handleSubmit} />
    </>
  )
}

export default CommunityForm
