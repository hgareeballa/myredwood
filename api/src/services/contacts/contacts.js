import { UserInputError } from '@redwoodjs/api'
import { db } from 'src/lib/db'

const validate = (input) => {
  if (input.name == '') {
    console.log(input.name);
    throw new UserInputError('Cant Insert Value', {
      messages: {
        name: ['is Required !'],
      },
    })
  }
}

export const contacts = () => {
  return db.contact.findMany()
}

export const createContact = ({ input }) => {
  validate(input)
  return db.contact.create({ data: input })
}
