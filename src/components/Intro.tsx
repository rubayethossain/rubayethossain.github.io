import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Intro = (): JSX.Element => {
  return (
    <header className="mx-auto max-w-screen-lg rounded-2xl rounded-tr-none rounded-bl-none my-10 p-5 bg-gray-800 shadow-md flex items-center">
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-white">Md. Rubayet Hossain</h1>
        <h2 className="text-xl font-semibold text-white">
          Professional Frontend Developer
        </h2>
      </div>

      <StaticImage
        src="../images/rubayet.jpg"
        width={150}
        quality={85}
        alt="Md. Ruabyet Hossain"
        className="rounded-full border-2"
      />

      <div className="flex-1"></div>
    </header>
  )
}

export default Intro
