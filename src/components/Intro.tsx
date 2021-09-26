import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SocialList from "./SocialList"

const Intro = (): JSX.Element => {
  return (
    <header className="mx-auto max-w-screen-lg shadow-md bg-white flex overflow-hidden my-10">
      <StaticImage
        src="../images/rubayet.jpg"
        width={215}
        quality={85}
        alt="Md. Ruabyet Hossain"
      />
      <div className="p-8 space-y-5 flex-1">
        <h2 className="text-3xl font-bold uppercase text-gray-700">
          Md. Rubayet Hossain
        </h2>
        <h2 className="text-2xl font-semibold text-gray-600">
          Professional Frontend Developer
        </h2>

        <SocialList />
      </div>

      <div className="p-8 space-y-4 w-64">
        <div>
          <h3 className="font-bold">Working @</h3>
          <p className="font-semibold text-gray-600">CEFALO Bangladesh</p>
        </div>

        <div>
          <h3 className="font-bold">Location</h3>
          <p className="font-semibold text-gray-600">Dhaka, Bangladesh</p>
        </div>

        <div>
          <h3 className="font-bold">Email</h3>
          <p className="font-semibold text-gray-600">hi@rubayet.dev</p>
        </div>
      </div>
    </header>
  )
}

export default Intro
