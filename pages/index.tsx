import { ChangeEvent, useState } from 'react'
import Button from '../components/Button'
import GeometricArtSVG from '../components/GeometricArtSVG'
import Input from '../components/Input'

export default function Home() {
  const [emailInput, setEmailInput] = useState('')

  return (
    <div className="flex flex-col px-3 py-14 lg:py-24">
      {/* Hero Section */}
      <div className="flex w-full">
        {/* left half */}
        <div className="">
          <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-7xl  lg:text-8xl">
            <span className="block text-5xl sm:text-7xl lg:text-8xl">
              A modern
            </span>
            <span className="block text-red-500">Primal Lifestyle</span>{' '}
            <span className="block text-5xl sm:text-7xl lg:text-8xl">
              Brand
            </span>
          </h1>
          <p className="lg-mt-6 mt-3 px-2 text-lg font-semibold md:max-w-xl md:text-xl lg:text-2xl">
            Creating resources, products, and tooling{' '}
            <span className="opacity-75">
              to help reincorporate primal ways into a modern lifestyle
            </span>
          </p>
          <div className="mt-4 flex w-full md:w-3/4 lg:mt-6">
            <div className="flex-grow pr-2">
              <Input
                placeholder="Enter Email..."
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmailInput(e.target?.value)
                }
                value={emailInput}
                className="text-md h-full w-full border-2 border-black px-3 sm:text-lg md:text-xl lg:px-5"
              />
            </div>
            <div className="relative">
              <Button
                onClick={() => console.log('partnering up!')}
                className="text-md border-2 border-red-500 bg-red-500 px-1 py-3 font-semibold text-white md:px-5 md:text-2xl"
              >
                Subscribe
              </Button>
              <p className="absolute w-full text-center text-xs lg:text-sm">
                <i>Get Updates</i>
              </p>
            </div>
          </div>
        </div>
        {/* right half */}
        <div className="relative hidden grow items-end md:flex">
          <div className="object-right-right absolute max-w-full">
            <GeometricArtSVG />
          </div>
        </div>
      </div>
      {/* How it works section */}
      <div className="py-14 lg:py-24">
        <div className="w-full pt-14 text-center lg:pt-24">
          <h2 className="text-2xl font-bold underline decoration-red-500 lg:text-4xl">
            About
          </h2>
          <p className="mx-auto mt-4 px-2 text-lg font-semibold md:max-w-3xl md:text-xl lg:mt-6 lg:text-2xl"></p>
        </div>
      </div>
    </div>
  )
}
