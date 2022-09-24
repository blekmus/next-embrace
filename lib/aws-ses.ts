import AWS from 'aws-sdk'
import fs from 'fs/promises'
import path from 'path'

AWS.config.update({
  accessKeyId: process.env.SITE_AWS_ACCESS_KEY,
  secretAccessKey: process.env.SITE_AWS_SECRET_ACCESS_KEY,
  region: 'ap-southeast-1',
})

AWS.config.getCredentials(function (error) {
  if (error) {
    console.log(error.stack)
  }
})

const mailer = async (email: string) => {
  // get html file from mails/confirmation.html
  const html = await fs.readFile(
    path.join(process.cwd(), 'mails', 'confirmation.html'),
    'utf8'
  )

  const params = {
    Source: `Ace Academy <noreply@aceacademy.lk>`,
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Subject: {
        Charset: 'UTF-8',
        Data: 'Embrace - Successfully Registered',
      },
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: html,
        },
      },
    },
  }
  const resp = await new AWS.SES({ apiVersion: '2012-10-17' }).sendEmail(params).promise()
  return resp
}



export default mailer
