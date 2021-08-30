import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Intro = (): JSX.Element => {
  return (
    <header className="mx-auto max-w-screen-lg rounded-2xl rounded-tr-none rounded-bl-none py-8 bg-intro shadow-md grid grid-cols-3 text-white">
      <div className="text-center px-5 border-r-2 border-gray-700">
        <StaticImage
          src="../images/rubayet.jpg"
          width={115}
          quality={85}
          alt="Md. Ruabyet Hossain"
          className="rounded-full border-2 mb-3"
        />
        <h1 className="text-2xl font-bold">Md. Rubayet Hossain</h1>
        <h2 className="text-xl font-semibold">Frontend Developer</h2>
      </div>

      <div className="h-full table px-5 border-r-2 border-gray-700">
        <p className="italic text-center my-auto table-cell align-middle">
          Passionate Frontend Developer with 5+ years of professional
          experience! Love React, JavaScript, HTML & CSS.
        </p>
      </div>

      <div className="px-5">
        <div className="mb-4">
          <h3>Location</h3>
          <p>
            <strong>Dhaka, Bangladesh</strong>
          </p>
        </div>

        <div className="mb-4">
          <h3>Email</h3>
          <p>
            <strong>hi@rubayet.dev</strong>
          </p>
        </div>

        <div>
          <ul>
            <li className="inline-block mx-2">
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
            <li className="inline-block mr-2">
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li className="inline-block mx-2">
              <FontAwesomeIcon icon={faGithub} />
            </li>
            <li className="inline-block ml-2">
              <FontAwesomeIcon icon={faMedium} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Intro
