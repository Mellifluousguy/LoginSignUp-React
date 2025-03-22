import React, { useContext } from 'react'
import { UserContext } from './dataContext'

const mainAccess = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="md:max-w-[375px] h-lvh border-2 flex text-heading gap-[30px] flex-col border-gray-300 w-full bg-[#F7F8F9]">
      <h3 className='p-4 text-lg bg-white'>Account Settings</h3>
      <div className='flex gap-[20px] px-[22px]'>
        <div className='relative self-start'>
          <img src="./profile.png" className='h-[75px] w-[75px]' alt="profile" />
          <img src="./camera.png" className='absolute right-0 bottom-0' alt="camera" />
        </div>
        <p className='text-[15px] flex flex-col font-medium'>{user.name || 'Mary Doe'}<span className='text-sm font-normal'>{user.email}</span></p>
      </div>
      <p className='px-[17px] text-sm text-justify'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
    </div>
  )
}

export default mainAccess