import {
  Box,
  Button,
  createStyles,
  Divider,
  Group,
  InputBase,
  Modal,
  Select,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconAt, IconPhone, IconUser, IconX } from '@tabler/icons'
import type { NextPage } from 'next'
import { useState } from 'react'
import FeaturingComponent from '../components/featuring.component'
import FooterComponent from '../components/footer.component'
import HeroComponent from '../components/hero.component'
import TopBarComponent from '../components/topbar.component'
import WebinarComponent from '../components/webinar.component'
import InputMask from 'react-input-mask'
import { showNotification } from '@mantine/notifications'
import GiveawayComponent from '../components/giveaway.component'

const useStyles = createStyles(() => ({}))

const Home: NextPage = () => {
  const [registerOpened, setRegisterOpened] = useState(false)
  const [comments, setComments] = useState(false)
  const [success, setSuccess] = useState(false)

  const [loading, setLoading] = useState(false)

  const { theme } = useStyles()

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      // academics: '',
      year: '',
    },
    validate: {
      name: (value) => (value.length < 3 ? 'Invalid name' : null),

      email: (val) =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(val)
          ? null
          : 'Invalid email',

      mobile: (val) =>
        /^(?:\+94|0)?[0-9]{9}$/.test(val.replace(/\s/g, ''))
          ? null
          : 'Invalid mobile number',

      year: (val) => (val ? null : 'Please select a year'),
    },
  })

  const commentsForm = useForm({
    initialValues: {
      question: '',
    },
    validate: {
      question: (value) =>
        value.split(' ').length < 3 ? 'Invalid question' : null,
    },
  })

  const handleSubmit = async (data: {
    name: string
    email: string
    mobile: string
    year: string
  }) => {
    setLoading(true)

    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok) {
      setLoading(false)

      showNotification({
        disallowClose: true,
        message: (
          <Text>
            Failed to save details. {result.message || 'Please try again later'}
          </Text>
        ),
        color: 'red',
        icon: <IconX />,
      })

      return
    }

    setLoading(false)
    setComments(true)
  }

  const handleCommentsSubmit = async (data: { question: string }) => {
    setLoading(true)

    const response = await fetch('/api/question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        email: form.values.email,
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      setLoading(false)

      showNotification({
        disallowClose: true,
        message: (
          <Text>
            Failed to save details. {result.message || 'Please try again later'}
          </Text>
        ),
        color: 'red',
        icon: <IconX />,
      })

      return
    }

    setLoading(false)
    setSuccess(true)
  }

  let modelContent

  if (success) {
    modelContent = (
      <Box>
        <Text color={theme.colors.green[7]}>
          Sucessfully registered for Embrace. We will be in touch with you
          shortly.
        </Text>

        <Divider mt="xl" mb="xl" />

        <Text color={theme.colors.green[7]}>Question submitted</Text>
      </Box>
    )
  } else if (comments) {
    modelContent = (
      <form onSubmit={commentsForm.onSubmit(handleCommentsSubmit)}>
        <Text color={theme.colors.green[7]}>
          Sucessfully registered for Embrace. We will be in touch with you
          shortly.
        </Text>

        <Divider mt="xl" mb="xl" />

        <Textarea
          label="Want to see your questions answered by our guest, Nihad Nabawi? Ask away!"
          placeholder="What was your study plan like?"
          {...commentsForm.getInputProps('question')}
        />

        <Group position="right" mt="md">
          <Button type="submit" color="dark" loading={loading}>
            Submit Question
          </Button>
        </Group>
      </form>
    )
  } else {
    modelContent = (
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          icon={<IconUser size={18} />}
          required
          mb="md"
          label="Name"
          placeholder="John Doe"
          {...form.getInputProps('name')}
        />

        <TextInput
          required
          label="Email"
          icon={<IconAt size={18} />}
          mb="md"
          placeholder="hello@example.com"
          {...form.getInputProps('email')}
        />

        <InputBase
          required
          label="Mobile"
          icon={<IconPhone size={18} />}
          mb="md"
          placeholder="071 234 5678"
          {...form.getInputProps('mobile')}
          component={InputMask}
          mask="099 999 9999"
        />

        <Select
          required
          label="Exam Year"
          placeholder="2022"
          {...form.getInputProps('year')}
          data={[
            { value: '2021', label: '2021' },
            { value: '2022', label: '2022' },
            { value: '2023', label: '2023' },
            { value: '2024', label: '2024' },
          ]}
        />

        <Group position="right" mt="md">
          <Button type="submit" color="dark" loading={loading}>
            Submit
          </Button>
        </Group>
      </form>
    )
  }

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Modal
        opened={registerOpened}
        onClose={() => setRegisterOpened(false)}
        title="Embrace registration"
        centered
      >
        {modelContent}
      </Modal>

      <TopBarComponent modal={setRegisterOpened} />

      <HeroComponent modal={setRegisterOpened} />

      <WebinarComponent />

      <FeaturingComponent />

      <GiveawayComponent />

      <FooterComponent modal={setRegisterOpened} />
    </Box>
  )
}

export default Home
