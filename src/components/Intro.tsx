import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faMedium,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

const Intro = (): JSX.Element => {
  return (
    <header className="mx-auto max-w-screen-lg rounded-2xl rounded-tr-none rounded-bl-none shadow-md bg-white flex overflow-hidden my-10">
      <div className="flex">
        <StaticImage
          src="../images/rubayet.jpg"
          width={300}
          quality={85}
          alt="Md. Ruabyet Hossain"
          className=""
        />
        <div className="p-8 space-y-4">
          <h2 className="text-3xl font-bold uppercase">Md. Rubayet Hossain</h2>
          <h2 className="text-2xl font-semibold ">
            Professional Frontend Developer
          </h2>
          <p className="font-semibold text-base text-gray-600">
            Passionate Frontend Developer with 5+ years of professional
            experience! Love React, JavaScript, HTML & CSS.
          </p>
        </div>
      </div>

      <div className="p-8 w-80">
        <div className="mb-4">
          <h3>Location</h3>
          <p className="font-semibold text-gray-600">Dhaka, Bangladesh</p>
        </div>

        <div className="mb-4">
          <h3>Email</h3>
          <p className="font-semibold text-gray-600">hi@rubayet.dev</p>
        </div>

        <div>
          <ul>
            <li className="inline-block mr-2">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </li>
            <li className="inline-block mx-2">
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
