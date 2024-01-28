const HeaderDropdown = ({header, children}) => {
  return (
    <>
        <div className="h-full text-colorOnyx hover:text-[#959595] dark:hover:text-[#808080] dark:text-white">{header}</div>
        <div className="flex items-center gap-1">
            {children}
        </div>
        
    </>
  )
}

export default HeaderDropdown