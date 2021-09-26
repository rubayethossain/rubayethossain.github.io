import React from "react"

const SocialList = (): JSX.Element => {
  return (
    <ul>
      <li className="inline-block mr-2">
        <a
          href="#"
          className="hover:text-linkedin transition-colors"
          title="Linkedin"
        >
          <i className="flaticon-linkedin text-2xl"></i>
        </a>
      </li>
      <li className="inline-block mx-2">
        <a
          href="#"
          className="hover:text-github transition-colors"
          title="GitHub"
        >
          <i className="flaticon-github text-2xl"></i>
        </a>
      </li>
      <li className="inline-block mx-2">
        <a
          href="#"
          className="hover:text-stackOverflow transition-colors"
          title="StackOverflow"
        >
          <i className="flaticon-stack-overflow text-2xl"></i>
        </a>
      </li>
      <li className="inline-block mx-2">
        <a
          href="#"
          className="hover:text-medium transition-colors"
          title="Medium"
        >
          <i className="flaticon-medium text-2xl"></i>
        </a>
      </li>
      <li className="inline-block ml-2">
        <a
          href="#"
          className="hover:text-twitter transition-colors"
          title="Twitter"
        >
          <i className="flaticon-twitter text-2xl"></i>
        </a>
      </li>
    </ul>
  )
}

export default SocialList
