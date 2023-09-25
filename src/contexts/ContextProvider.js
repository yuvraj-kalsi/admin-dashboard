import React, {createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

// Basic React arrow function component which in 
// props has the childer property
export const ContextProvider = ({ children }) => {

    // For SideBar
    const [activeMenu, setActiveMenu] = useState(true)

    
    // For Cart, Chat, Notification, UserProfile
    const [isClicked, setIsClicked] = useState(initialState)

    
    // For Mobile SideBar to disappear it
    const [screenSize, setScreenSize] = useState(undefined)

    
    // Changing value of which is clicked
    // ... is used to destructure the object 

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked] : true})
    }

    const handleCloseClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked] : false})
    }

    
    // For Theme Color Options
    const [currentColor, setCurrentColor] = useState('#03C9D7')

    
    // For Dark or Light Mode
    const [currentMode, setCurrentMode] = useState('Light')

   
    // To check whether the setting bar is opened or closed
    const [themeSettings, setThemeSettings] = useState(false)
    

    // Function to change accordingly 
    const setMode = (e) => {

        // destructuring the event - e
        setCurrentMode(e.target.value)

        localStorage.setItem('themeMode', e.target.value)

        // close the settings after clicking the color
        setThemeSettings(false)
    }
    
    const setColor = (color) => {
        setCurrentColor(color)

        localStorage.setItem('colorMode', color)

        // close the settings after clicking the color
        setThemeSettings(false)
    }
    
    return (
        <StateContext.Provider
        // write key like below if key and value has same name
            value={{ 
                activeMenu,  
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                handleCloseClick,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                setMode,
                setColor,
                themeSettings,
                setThemeSettings

            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)

