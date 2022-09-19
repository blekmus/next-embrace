import { Button, Container, createStyles, Group } from '@mantine/core'
import Image from 'next/image'
import AceLogoImage from '../public/images/ace_logo.png'

const useStyles = createStyles(() => ({
  register_button: {
    fontWeight: 'bold',
  },
}))

const TopBarComponent = ({
  modal,
}: {
  modal: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { classes } = useStyles()

  return (
    <Container size="xl" pt={35} pb={35}>
      <Group position="apart">
        <Image
          src={AceLogoImage}
          width={120}
          height={37}
          priority
          alt="Ace Academy Logo"
        />
        <Group>
          <Button
            size="md"
            className={classes.register_button}
            onClick={() => modal(true)}
            color="dark"
          >
            REGISTER
          </Button>
        </Group>
      </Group>
    </Container>
  )
}

export default TopBarComponent
