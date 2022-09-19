import { Box, Button, Container, createStyles, Group, Stack, Text } from '@mantine/core'
import Image from 'next/image'
import mediaQuery from '../lib/media-query'
import BackgroundImage from '../public/images/background.png'
import EmbraceLogoImage from '../public/images/embrace_logo.png'


const useStyles = createStyles(() => ({
  hero: {
    position: 'relative',
    height: 'calc(90vh - 120px)',
    minHeight: '500px',
    padding: 0,

    [mediaQuery[3]]: {
      height: 'auto',
      width: '90%',
      minHeight: 'auto',
    },

    [mediaQuery[1]]: {
      width: '100%',
    },

    [mediaQuery[0]]: {
      paddingBottom: '20px'
    },
  },

  content: {
    position: 'relative',
    height: '100%',

    [mediaQuery[3]]: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '40px',
    },

    [mediaQuery[2]]: {
      rowGap: '20px',
    }
  },

  content_stack: {
    [mediaQuery[0]]: {
      gap: 0,
    }
  },

  content_img: {
    height: 120,
    width: 450,
    position: 'relative',

    [mediaQuery[0]]: {
      width: '190px',
      height: '55px',
    }
  },

  content_tagline: {
    [mediaQuery[0]]: {
      width: '90%',
      fontSize: '15px',
      lineHeight: 1.3,
    }
  },

  logo: {
    [mediaQuery[1]]: {
      width: '80%'
    }
  },

  giveaway: {
    position: 'absolute',
    top: 0,
    left: 0,

    [mediaQuery[3]]: {
      position: 'initial',
    },

    [mediaQuery[0]]: {
      display: 'flex',
      justifyContent: 'center',
    }
  },

  hashtag: {
    position: 'absolute',
    bottom: 0,
    left: 0,

    [mediaQuery[3]]: {
      position: 'initial',
    },

    [mediaQuery[0]]: {
      display: 'none',
    }
  },

  underlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',

    img: {
      borderRadius: '12px',

      [mediaQuery[1]]: {
        borderRadius: 0,
      },
    },
  },
}))

const HeroComponent = ({
  modal,
}: {
  modal: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { classes } = useStyles()

  return (
    <Container size="xl" className={classes.hero}>
      <Box className={classes.content}>
        <Box className={classes.giveaway} p="sm">
          <Button color="dark" size="xs">
            <Group spacing={5}>
              🔥
              <Text
                gradient={{
                  from: '#858BD2',
                  to: '#95ABE5',
                  deg: 90,
                }}
                variant="gradient"
              >
                Be apart of the Giveaway
              </Text>
            </Group>
          </Button>
        </Box>

        <Stack
          align="center"
          sx={{ height: '100%' }}
          justify="center"
          className={classes.content_stack}
        >
          <Text color="white" weight="lighter" pb="sm">
            Ace Academy Presents
          </Text>

          <Box className={classes.content_img}>
            <Image src={EmbraceLogoImage} layout="fill" alt="embrace logo" />
          </Box>

          <Text
            size="lg"
            color="white"
            pt="sm"
            pb="lg"
            sx={{ width: '50%', textAlign: 'center' }}
            className={classes.content_tagline}
          >
            This is the tagline. Do whatever you want with it as long as it has
            some kind of a meaning. Okay?
          </Text>
          <Button size="md" color="dark" sx={{ width: 150 }} mt="xl" onClick={() => modal(true)}>
            JOIN
          </Button>
        </Stack>

        <Box className={classes.hashtag} p="sm">
          <Text size="md" color="white">
            #embrACE
          </Text>
        </Box>
      </Box>
      <Box className={classes.underlay}>
        <Image src={BackgroundImage} layout="fill" alt="background" />
      </Box>
    </Container>
  )
}

export default HeroComponent
