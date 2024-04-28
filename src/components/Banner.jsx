const Banner = ({ title, subtitle }) => {
  return (
    <div className="relative">
      <h1 className="text-colorOnyx dark:text-colorWhite text-center sm:text-left text-5xl sm:text-7xl font-bold mb-4">
        {title}
      </h1>
      <p className="sm:text-2xl text-lg text-center sm:text-left text-colorDarkGray dark:text-[#a0a0a0] font-light opacity-50 pb-[60px]">
        {subtitle}
      </p>
      <div className="absolute bottom-0 w-[100%] h-[1px] bg-colorCardBorder dark:bg-[#ffffff30]" />
    </div>
  );
};

export default Banner;
