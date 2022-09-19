import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const {
    name,
    email,
    mobile,
    year,
  }: { name: string; email: string; mobile: string; year: string } = req.body

  // validate input
  if (!name || !email || !mobile || !year) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  // check for input sizes
  if (
    name.length > 300 ||
    email.length > 320 ||
    mobile.length > 15 ||
    year.length > 5
  ) {
    return res.status(400).json({ message: 'Inputs are too long' })
  }

  // test for valid email
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email' })
  }

  // test for valid mobile
  const mobileRegex = /^(?:\+94|0)?[0-9]{9}$/
  if (!mobileRegex.test(mobile.replace(/\s/g, ''))) {
    return res.status(400).json({ message: 'Invalid mobile' })
  }

  // test for valid year
  const yearRegex = /^(?:1|2)[0-9]{3}$/
  if (!yearRegex.test(year)) {
    return res.status(400).json({ message: 'Invalid year' })
  }

  // check if user already exists
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (existingUser) {
      return res.status(200).send({ message: 'User already exists' })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal server error' })
  }

  // create user
  try {
    await prisma.user.create({
      data: {
        name,
        email,
        mobile,
        year,
      },
    })

    return res.status(200).send({ message: 'User created' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export default handler