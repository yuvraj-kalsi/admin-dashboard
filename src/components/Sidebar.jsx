import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const {activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();


  // For closing the sidebar in mobile-view
  const handleCloseSideBar = () => {
    if(activeMenu !== undefined && screenSize <= 900)
    {
      setActiveMenu(false)
    }
  }


  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  
  return (
    <div className='ml-3 h-screen md:overflow-hidden
    overflow-auto md:hover:overflow-auto pb-10'>
      
      {/* this code checks the value of activeMenu.  */}
      {/* If activeMenu is true, the <div> element will be rendered */}
      {/* otherwise not */}

      {activeMenu && (<>
        <div className='flex justify-between items-center'>

          {/* Link for a button/logo at top-left */}
          <Link to="/" onClick={handleCloseSideBar}
            className='items-center gap-3 ml-3
            mt-4 flex text-xl font-extrabold tracking-tight
            dark:text-white  text-slate-900'>
            <SiShopware /> <span> Shoppy</span>
          </Link>


          {/* Making button to open/close the sidebar */}
          <TooltipComponent content="Menu" position="BottomCenter">
            <button type="button"
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>

        </div>


        {/* Importing titles from 'link' array of objects from dummy.js */}
        <div className='mt-10'>
          
          {/* It is nested loop (loop - inside - loop) */}
          
          {links.map((item) => (
            
            // Printing heading-titles
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
              </p>

            {/* Making sub-titles link for each heading title */}
              {item.links.map((link) => (
                <NavLink
                  to = {`/${link.name}`}
                  key = {link.name}

                  // If you click 'Orders' and if it is in mobile-view
                  // sidebar will automatically close
                  onClick = {handleCloseSideBar}
                  
                  // Setting the color of sidebar
                  style = {({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : ''
                  })}

                  // Sub-titles will be follow activeLink or normalLink
                  // depending whether that link is opened or not

                  className = {({ isActive }) => 
                  isActive ? activeLink : normalLink} 
                >

                  {/* Displaying icons with its sub-title */}
                  {link.icon}
                  <span className='capitalize'> {link.name} </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>
      )}
    </div>
  )
}

export default Sidebar