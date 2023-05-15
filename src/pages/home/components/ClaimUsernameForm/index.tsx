import { ArrowRight } from 'phosphor-react'
import { Form } from './styles'
import { Button, TextInput } from '@ignite-ui/react'
export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput size="sm" prefix="ignite.com/" placeholder="your-user" />
      <Button size="sm" type="submit">
        Claim
        <ArrowRight />
      </Button>
    </Form>
  )
}
