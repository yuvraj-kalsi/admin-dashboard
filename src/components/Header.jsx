import React from 'react'

const Header = ({ category, title, darkey }) => {
  return (
    
    <div className='mb-10 '>

      <p className='text-gray-400'>
        {category}
      </p>

      {/* <div className={
            `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
            ${activeMenu 
              ? 'md:ml-72' 
              : 'flex-2'}`
          }> */}

      <p className={`text-3xl font-extrabold tracking-tight
      text-slate-900 ${darkey ? 'dark:text-gray-200' : ''}`}>
        {title}
      </p>

    </div>
  )
}

export default Header