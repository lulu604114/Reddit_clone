export default interface CommunityForm {
  name: string,
  type: 'public' | 'private' | 'restricted',
  nsfw: boolean
}
