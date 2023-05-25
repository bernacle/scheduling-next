import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Make your calendar visible | Ignite Call"
        description="Connect your calendar to automatically verify your availability."
      />

      <Container>
        <Hero>
          <Heading as="h1" size="4xl">
            Easy scheduling
          </Heading>
          <Text size="xl">
            Conect your calendar and allow people to schedule meetings in your
            free time.
          </Text>
          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="Image of a calendar used on the application"
          />
        </Preview>
      </Container>
    </>
  )
}
