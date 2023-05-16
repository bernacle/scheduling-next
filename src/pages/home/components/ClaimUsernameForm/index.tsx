import { ArrowRight } from 'phosphor-react'
import { Form, FormAnnotation } from './styles'
import { Button, Text, TextInput } from '@ignite-ui/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must have at least 3 characters' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Username can have only letters and dash',
    })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  const router = useRouter()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    const { username } = data

    await router.push(`/register?username=${username}`)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="your-user"
          {...register('username')}
        />

        <Button size="sm" type="submit" disabled={isSubmitting}>
          Claim
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text size="sm">
          {errors.username ? errors.username.message : 'Type the username'}
        </Text>
      </FormAnnotation>
    </>
  )
}
