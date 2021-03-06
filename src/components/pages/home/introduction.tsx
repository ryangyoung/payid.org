import React from 'react'

import BetterUX from '../../../assets/home/introduction/better-ux.svg'
import MobileIdentifier from '../../../assets/home/introduction/identifier-mobile.svg'
import Identifier from '../../../assets/home/introduction/identifier.svg'
import OpenSource from '../../../assets/home/introduction/open-source.svg'
import TechStack from '../../../assets/home/introduction/tech-stack.svg'
import { getDocsLocation } from '../../../utils/config'
import Button from '../../common/button'
import Wave from '../../common/wave'

const Introduction: React.FC = () => {
  const bgImgStyle = {
    backgroundImage: 'url(/assets/home/background.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
  }

  const sectionCopy = [
    {
      title: 'Open Source',
      icon: OpenSource,
      description:
        'Join the community dedicated to improving payments with open standards and protocols',
    },
    {
      title: 'Better Payment Experience',
      icon: BetterUX,
      description:
        'Replace complex account numbers with a simple ID that works across any payment network and currency',
    },
    {
      title: 'Simple Tech Stack',
      icon: TechStack,
      description:
        'Built on HTTP/DNS standards for easy deployment in any app, on any platform',
    },
  ]

  return (
    <Wave
      style={bgImgStyle}
      wave="light-blue"
      spacing="sm"
      waveClassNames="bg-contain lg:bg-auto xl:bg-contain"
    >
      <div className="flex flex-col items-center">
        <h1 className="max-w-3xl pt-16 text-3xl font-bold text-center sm:text-h1 sm:leading-tighter lg:pt-70 sm:mb-10 mb-7">
          The Universal Payment Identifier
        </h1>
        <p className="mb-20 text-center md:mb-10 md:max-w-md sm:text-xl">
          A better way for your users to send and receive payments
        </p>
        <div className="hidden md:flex">
          <a href={getDocsLocation()} className="mr-8">
            <Button size="lg" label="Start Building" />
          </a>
          <Button
            to="/our-vision-to-simplify-payments"
            size="lg"
            variant="secondary"
            label="Learn More"
          />
        </div>
        <div className="md:hidden">
          <a href={getDocsLocation()} className="mr-6">
            <Button label="Start Building" />
          </a>
          <Button to="/contact" variant="secondary" label="Find Out More" />
        </div>
        <Identifier className="hidden mt-36 lg:block" />
        <MobileIdentifier className="max-w-xs mt-24 lg:hidden" />
        <div className="grid grid-cols-1 gap-16 mt-24 lg:mt-36 lg:gap-28 lg:grid-cols-3">
          {sectionCopy.map((copy) => {
            return (
              <div key={copy.title} className="max-w-sm sm:max-w-lg">
                <copy.icon className="mb-10" />
                <h3 className="text-2xl font-bold sm:text-3xl mb-7">
                  {copy.title}
                </h3>
                <p className="sm:text-xl">{copy.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Wave>
  )
}

export default Introduction
