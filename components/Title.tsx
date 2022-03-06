import React from 'react'

const Title = () => {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-8 lg:py-0">
        <div className="space-y-4 px-9">
          <h1 className="max-w-xl font-serif text-5xl">
            <span className="decoration-3 underline decoration-black">
              Medium
            </span>{' '}
            is a place to write, read & connect
          </h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            deserunt velit id atque? Odio, facere.
          </h2>
        </div>
        <img
          className="h-32 hidden md:inline-flex lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt="Mlogo"
        />
      </div>
    </div>
  )
}

export default Title
