import { Box, Container, createStyles, Text, Title } from '@mantine/core'
import mediaQuery from '../lib/media-query'


const useStyles = createStyles((theme) => ({
  main_grid: {
    display: 'grid',
    gridAutoColumns: '1fr',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto',

    [mediaQuery[2]]: {
      gridTemplateColumns: '1fr',
      marginTop: 150,
    },
  },

  title_grid: {
    gridColumnStart: 'span 1',
    gridColumnEnd: 'span 1',
    gridRowStart: 'span 1',
    gridRowEnd: 'span 1',
    paddingBottom: '100px',

    [mediaQuery[1]]: {
      paddingBottom: '30px',
    },
  },

  title_text_big: {
    fontSize: '110px',
    fontWeight: 'normal',
    lineHeight: 1.1,
    marginBottom: '70px',
    color: theme.colors.dark[5],
    whiteSpace: 'nowrap',

    [mediaQuery[2]]: {
      display: 'none',
    },

    span: {
      background: theme.fn.linearGradient(50, '#8486d0', '#adbfe8', '#c4acd7'),
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },

  title_text_small: {
    display: 'none',
    fontSize: '45px',
    fontWeight: 'normal',
    lineHeight: 1.1,
    marginBottom: '40px',
    color: theme.colors.dark[5],
    whiteSpace: 'nowrap',

    [mediaQuery[2]]: {
      display: 'block',
      whiteSpace: 'normal',
    },

    span: {
      background: theme.fn.linearGradient(50, '#8486d0', '#adbfe8', '#c4acd7'),
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },

  title_desc: {
    color: theme.colors.dark[5],
    fontSize: '30px',

    [mediaQuery[2]]: {
      fontSize: '22px',
    },
  },

  items_grid: {
    gridColumnStart: 'span 1',
    gridColumnEnd: 'span 1',
    gridRowStart: 'span 1',
    gridRowEnd: 'span 1',
    alignSelf: 'end',
  },

  items_list: {
    listStyle: 'none',

    [mediaQuery[2]]: {
      padding: 0,
    },

    li: {
      display: 'flex',
      marginTop: '2rem',
      gridColumnGap: '1rem',

      span: {
        width: '100px',
        flex: '0 0 auto',
        fontSize: '70px',
        textAlign: 'center',
        lineHeight: 1,
        marginBottom: '30px',

        [mediaQuery[2]]: {
          fontSize: '45px',
          width: '50px',
        },

        [mediaQuery[1]]: {
          marginBottom: 0,
        },

        background: theme.fn.linearGradient(
          30,
          '#8486d0',
          '#adbfe8',
          '#c4acd7'
        ),
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },

  item_desc: {
    fontSize: '23px',
    fontWeight: 'lighter',

    [mediaQuery[1]]: {
      fontSize: '18px',
    },

    [mediaQuery[1]]: {
      fontSize: '15px',
    },
  },
}))

const GiveawayComponent = () => {
  const { classes } = useStyles()

  return (
    <Container size="xl" className={classes.main_grid} mt={280} id="giveaway-cont">
      <Box className={classes.title_grid}>
        <Title className={classes.title_text_big}>
          Be apart <br />
          of the <br />
          <span>giveaway</span>
        </Title>

        <Title className={classes.title_text_small}>
          More than just a <span>webinar</span>
        </Title>

        <Text className={classes.title_desc}>
          {
            'Stand a chance to win two thyaga multistore e-gift vouchers every episode. Redeem them from over 90+ stores islandwide. To participate...'
          }
        </Text>
      </Box>

      <Box className={classes.items_grid}>
        <ol className={classes.items_list}>
          <li>
            <span>1</span>
            <Text className={classes.item_desc}>
              The person who asks the best question will win a gift voucher. The
              featured guest will be selecting the winner.
            </Text>
          </li>

          <li>
            <span>2</span>
            <Text className={classes.item_desc}>
              Invite five of your friends to our embrace video cast community
              and be eligible to win. The raffle draw will be held at the end of
              the episode.
            </Text>
          </li>
        </ol>
      </Box>
    </Container>
  )
}

export default GiveawayComponent
