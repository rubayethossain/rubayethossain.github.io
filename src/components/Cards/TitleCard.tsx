import React from "react"

interface Props {
  title: string
  icon: JSX.Element
}

const TitleCard = (props: Props) => {
  return (
    <div className="border border-gray-900 rounded h-20 flex items-center">
      <div className="w-20 h-20 flex justify-center items-center border-r border-gray-900">
        <span className="text-5xl">{props.icon}</span>
      </div>
      <h3 className="p-3 text-lg capitalize font-bold text-gray-600">
        {props.title}
      </h3>
    </div>
  )
}

export default TitleCard
