import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'

export default function About({ data }) {
  console.log({ data })
  return (
    <Layout>
      <article>
        <h1>About me</h1>
        <Image filename='gatsby-astronaut.png' alt='A corgi smiling happily' />

        <p>
          I’m good enough, I’m smart enough, and gosh darn it, people like me!
        </p>
        <img className='w-80 h-80' src={`../assets/og-image.jpg`} alt='' />
      </article>
    </Layout>
  )
}
