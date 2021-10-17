import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SocialList from "./SocialList"
import { TextTag } from "./Tags"

const Intro = (): JSX.Element => {
  return (
    <header className="lg:mx-auto sm:max-w-screen-lg shadow-md bg-white flex flex-col sm:flex-row overflow-hidden">
      <StaticImage
        src="../images/rubayet.jpg"
        width={215}
        quality={85}
        alt="Md. Ruabyet Hossain"
        className="w-32 sm:w-auto rounded-full sm:rounded-none mx-auto sm:ml-0 mt-6 sm:mt-0"
      />

      <div className="p-5 sm:p-8 space-y-3 sm:space-y-5 sm:flex-1">
        <h2 className="text-2xl lg:text-3xl font-bold uppercase text-gray-700 text-center sm:text-left">
          Md. Rubayet Hossain
        </h2>
        <h2 className="text-xl lg:text-2xl font-semibold text-gray-600 text-center sm:text-left">
          Professional Frontend Developer
        </h2>

        <SocialList />
      </div>

      <div className="p-5 sm:p-8 space-y-3 sm:space-y-4 sm:w-64">
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-2">Working @</h3>
          <p className="text-sm font-semibold">
            <TextTag>CEFALO</TextTag>
          </p>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-2">Location</h3>
          <p className="text-sm font-semibold">
            <TextTag>Dhaka, Bangladesh</TextTag>
          </p>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-2">Email</h3>
          <p className="text-sm font-semibold">
            <TextTag>hi@rubayet.dev</TextTag>
          </p>
        </div>
      </div>
    </header>
  )
}

export default Intro
