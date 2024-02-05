import React from 'react'

const SubMenu = ({menu, isOpened, isOnTop, to}) => {
  return (
    <div className={`${isOpened ? "grid-rows-full py-4 opacity-100" : "h-0 opacity-0"} absolute grid duration-300 overflow-hidden text-colorOnyx shadow-lg dark:text-white top-[42px] -left-1/2 rounded-b-xl px-4
    ${!isOnTop ? "bg-colorWhite25 backdrop-blur-[2px]" : "bg-colorWhite70 text-colorOnyx backdrop-blur-[15px]"}`}>
        {menu.dropdown.map((sub, i) => (
            <div key={i}>
                {sub.dropdownName}
            </div>
        ))}
    </div>
  )
}

export default SubMenu