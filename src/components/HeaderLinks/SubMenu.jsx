import React from 'react'

const SubMenu = ({menu, isOpened, isOnTop}) => {
  return (
    <div className={`${isOpened ? "grid-rows-full py-4 opacity-100" : "h-0 opacity-0"} absolute grid duration-300 overflow-hidden text-colorOnyx shadow-lg dark:text-white top-[42px] -left-1/2 bg-white rounded-b-xl px-4 border-[rgba(255, 255, 255, 0.25)] backdrop-blur-[2px]
    ${!isOnTop ? "bg-colorWhite25" : "bg-white"}`}>
        {menu.dropdown.map((sub, i) => (
            <div key={i}>
                {sub.dropdownName}
            </div>
        ))}
    </div>
  )
}

export default SubMenu