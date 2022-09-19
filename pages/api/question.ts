import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { email, question }: { email: string; question: string } = req.body

  // validate input
  if (!email || !question) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  // check for input sizes
  if (email.length > 320 || question.length > 1000) {
    return res.status(400).json({ message: 'Inputs are too long' })
  }

  // test for valid email
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email' })
  }

  // check if question isn't empty
  if (question.trim().length === 0) {
    return res.status(400).json({ message: 'Question is empty' })
  }

  // check if user already exists
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!existingUser) {
      return res.status(400).json({ message: 'User does not exist' })
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }

  try {
    // create question
    await prisma.userQuestion.create({
      data: {
        question,
        user: {
          connect: {
            email,
          },
        },
      },
    })

    return res.status(200).json({ message: 'Question created' })
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export default handler
