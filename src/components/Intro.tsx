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
    <header className="mx-auto max-w-screen-lg shadow-md bg-white flex overflow-hidden my-10">
      <div className="flex">
        <StaticImage
          src="../images/rubayet.jpg"
          width={300}
          quality={85}
          alt="Md. Ruabyet Hossain"
          className=""
        />
        <div className="p-8 space-y-4">
          <h2 className="text-3xl font-bold uppercase text-gray-700">
            Md. Rubayet Hossain
          </h2>
          <h2 className="text-2xl font-semibold text-gray-600">
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
          <h3 className="font-bold">Location</h3>
          <p className="font-semibold text-gray-600">Dhaka, Bangladesh</p>
        </div>

        <div className="mb-4">
          <h3 className="font-bold">Email</h3>
          <p className="font-semibold text-gray-600">hi@rubayet.dev</p>
        </div>

        <div>
          <ul>
            <li className="inline-block mr-2">
              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li className="inline-block mx-2">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="inline-block mx-2">
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="inline-block ml-2">
              <a href="#">
                <FontAwesomeIcon icon={faMedium} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Intro
