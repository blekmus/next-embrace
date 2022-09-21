import AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-southeast-1',
})

AWS.config.getCredentials(function (error) {
  if (error) {
    console.log(error.stack)
  }
})

const mailer = async (email: string) => {
  const params = {
    Source: `Ace Academy <noreply@aceacademy.lk>`,
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Subject: {
        Charset: 'UTF-8',
        Data: 'This is the subject',
      },
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `This is the data`,
        },
      },
    },
  }
  const resp = await new AWS.SES({ apiVersion: '2012-10-17' }).sendEmail(params).promise()
  return resp
}



export default mailer
