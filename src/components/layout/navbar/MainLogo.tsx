import { Flex, Image, Link } from '@chakra-ui/react'

const MainLogo = () => {
  return (
    <Link>
      <Flex
        direction='row'
        alignItems='center'
        height='100%'
        gap='2'
      >
        <Image
          src='/images/reddit_logo.svg'
          height='32px'
          width='32px'
          alt='reddit_logo'
        />
        <Image
          src='/images/reddit_title.svg'
          height='18px'
          display={{
            base: 'none',
            md: 'unset'
          }}
          alt={'reddit_title'}
        />
      </Flex>
    </Link>
  )
}

export default MainLogo
