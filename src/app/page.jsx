import Image from 'next/image'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import avatarImage from '@/images/avatar.jpg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <div className="aspect-9/10">
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Container className="pt-24 pb-8 sm:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-white/90 p-1 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:bg-zinc-800/90 dark:ring-white/10">
              <Image
                src={avatarImage}
                alt="Sean"
                sizes="4rem"
                className="h-16 w-16 rounded-full object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-6xl dark:text-zinc-100">
            I build simple websites for small businesses
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            I’m Sean. Get a clean, modern site in 5 days for $300. No hassle.
          </p>
        </div>
      </Container>

      <Photos />

      <Container className="mt-20 pb-24 sm:mt-24 sm:pb-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
            Perfect for small businesses, freelancers, and local service
            providers who need a clean, professional site fast.
          </p>
          <div className="mt-12">
            <h2 className="text-sm font-semibold tracking-wide text-zinc-800 uppercase dark:text-zinc-100">
              What you get
            </h2>
            <ul className="mt-4 space-y-3 text-base text-zinc-600 dark:text-zinc-400">
              <li>One-page modern website</li>
              <li>Mobile-friendly and fast</li>
              <li>Live and ready to share</li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-sm font-semibold tracking-wide text-zinc-800 uppercase dark:text-zinc-100">
              How it works
            </h2>
            <div className="mt-4 space-y-3 text-base text-zinc-600 dark:text-zinc-400">
              <p>Email me</p>
              <p>Send your info</p>
              <p>I build your site in 5 days</p>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-sm font-semibold tracking-wide text-zinc-800 uppercase dark:text-zinc-100">
              Get started
            </h2>
            <p className="mt-4 text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
              Look professional, stand out, and get more clients.
            </p>
          </div>
          <div className="mt-8">
            <Button
              href="mailto:start@iamseanbrown.com"
              className="px-5 py-3 text-base"
            >
              Start your site
            </Button>
          </div>
        </div>
      </Container>
    </>
  )
}
