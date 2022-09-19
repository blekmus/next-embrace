import { Box, Container, createStyles, Group, Text, Title } from '@mantine/core'
import { IconArrowUpRight } from '@tabler/icons'
import Image from 'next/image'
import Link from 'next/link'
import mediaQuery from '../lib/media-query'
import NihadImage from '../public/images/nihad.png'

const useStyles = createStyles((theme) => ({
  base: {
    [mediaQuery[2]]: {
      marginTop: 150,
    }
  },

  image_overlay: {
    position: 'absolute',
    top: -50,
    right: -200,
    zIndex: -1,
    width: 500,
    height: 504,

    [mediaQuery[2]]: {
      width: 300,
      height: 304,
      top: -160,
      right: -100,
    },

    [mediaQuery[1]]: {
      display: 'none',
    },
  },

  title_text: {
    fontSize: '110px',
    fontWeight: 'normal',
    lineHeight: 1.1,
    marginBottom: '70px',
    color: theme.colors.dark[5],
    whiteSpace: 'nowrap',

    [mediaQuery[2]]: {
      whiteSpace: 'normal',
      fontSize: '45px',
      marginBottom: '50px',
    },

    span: {
      background: theme.fn.linearGradient(50, '#8486d0', '#adbfe8', '#c4acd7'),
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },

  content_venue: {
    [mediaQuery[2]]: {
      gap: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },

  content_venue_text: {
    fontFamily: 'Fira Code, monospace',
    fontSize: '25px',
    background: theme.fn.linearGradient(90, '#3D396D', '#756B8F', '#44588C'),
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',

    [mediaQuery[2]]: {
      fontSize: '20px',
    },

    [mediaQuery[1]]: {
      fontSize: '15px',
    }
  },

  content_desc: {
    [mediaQuery[2]]: {
      fontSize: '22px',
      width: '100%',
    },

    [mediaQuery[1]]: {
      fontSize: '15px',
    }
  },

  content_sep: {
    [mediaQuery[2]]: {
      display: 'none',
    },
  },
}))

const FeaturingComponent = () => {
  const { classes, theme } = useStyles()

  return (
    <Container size="xl" mt={280} sx={{ position: 'relative' }} className={classes.base}>
      <Box className={classes.image_overlay}>
        <Image
          src={NihadImage}
          alt="Nihad"
          layout="fill"
          style={{ opacity: '0.6' }}
        />
      </Box>

      <Title className={classes.title_text}>
        Featuring
        <br />
        <span>Nihad Nabawi</span>
      </Title>

      <Box>
        <Group className={classes.content_venue} mb="xs">
          <Text className={classes.content_venue_text}>
            Sunday, 25th September at 7:00 PM
          </Text>
          <Box className={classes.content_sep}>
            <Text className={classes.content_venue_text}>|</Text>
          </Box>
          <Text className={classes.content_venue_text}>Live Videocast</Text>
        </Group>

        <Text
          size={25}
          sx={{ width: '70%', color: theme.colors.dark[5] }}
          className={classes.content_desc}
          mb={60}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies
          laoreet mollis. Morbi pharetra dignissim tempor. Suspendisse potenti.
          Nam ac tempus sapien. Duis aliquet efficitur eros quis
        </Text>

        <Link href="https://aceacademy.lk/NihadNabawi" passHref>
          <Text
            component="a"
            size="xl"
            weight={600}
            sx={{ display: 'flex' }}
            target="_blank"
          >
            Learn more
            <IconArrowUpRight size={30} />
          </Text>
        </Link>
      </Box>
    </Container>
  )
}

export default FeaturingComponent
