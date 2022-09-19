import { Box, Button, createStyles, Stack, Text, Title } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import mediaQuery from '../lib/media-query'
import BackgroundImage from '../public/images/background.png'
import PatternImage from '../public/images/pattern.png'

const useStyles = createStyles(() => ({
  base: {
    position: 'relative',
    height: '300px',
    marginTop: '200px',

    [mediaQuery[0]]: {
      height: '230px',
      marginTop: '100px',
    }
  },

  title_text: {
    [mediaQuery[0]]: {
      fontSize: '45px',
    }
  },

  underlay_background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -2,
    width: '100%',
    height: '100%',
  },

  underlay_pattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${PatternImage.src})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },

  register_button: {
    fontWeight: 'bold',
  },

  ace_link: {
    position: 'absolute',
    left: 10,
    bottom: 10,
  },
}))

const FooterComponent = ({
  modal,
}: {
  modal: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { classes } = useStyles()

  return (
    <Box className={classes.base}>
      <Box className={classes.underlay_background}>
        <Image
          src={BackgroundImage}
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <Box className={classes.underlay_pattern} />

      <Box className={classes.ace_link}>
        <Text sx={{ display: 'inline' }} color="white">
          Powered by{' '}
        </Text>
        <Link href="https://aceacademy.lk" passHref>
          <Text
            component="a"
            color="white"
            sx={{ textDecoration: 'underline' }}
            target="_blank"
          >
            Ace Academy
          </Text>
        </Link>
      </Box>

      <Box sx={{ height: '100%' }}>
        <Stack sx={{ height: '100%' }} align="center" justify="center">
          <Title
            size={90}
            sx={{
              fontFamily: 'Bebas Neue',
              fontWeight: 'normal',
              lineHeight: 1,
            }}
            className={classes.title_text}
            color="white"
          >
            STAY UPDATED
          </Title>
          <Button size="md" className={classes.register_button} color="dark" onClick={() => modal(true)}>
            REGISTER NOW
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default FooterComponent
