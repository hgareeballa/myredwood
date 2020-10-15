import BlogLayout from 'src/layouts/BlogLayout'
import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
  FormError
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { useForm } from 'react-hook-form'


const CREATE_CONTACT = gql`
  mutation CreateContact($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`
const ContactPage = () => {
  const formMethods = useForm()

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      // formMethods.reset()
      alert('Thank you')
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
    console.log(data)
  }

  return (
    <BlogLayout>
      <div className="container">
        <FormError error={error} />
        <Form onSubmit={onSubmit} formMethods={formMethods} error={error}>
          <Label name="name" className="label" errorClassName="label error" />
          <TextField
            name="name"
            className="input"
            errorClassName="input error"
            validation={{ required: false }}
          />
          <FieldError name="name" className="error-message" />

          <Label name="email" className="label" errorClassName="label error" />
          <TextField
            name="email"
            className="input"
            errorClassName="input error"
            validation={{
              required: true,
              pattern: {
                value: /[^@]+@[^\.]+\..+/,
              },
            }}
          />
          <FieldError name="email" className="error-message" />

          <Label
            name="message"
            className="label"
            errorClassName="label error"
          />
          <TextAreaField
            name="message"
            className="input"
            errorClassName="input error"
            validation={{ required: true }}
          />
          <br></br>
          <FieldError name="message" className="error-message" />

          <Submit className="button" disabled={loading}>
            Save
          </Submit>
        </Form>
      </div>
    </BlogLayout>
  )
}
export default ContactPage
