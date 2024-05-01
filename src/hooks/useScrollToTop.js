const useScrollToTop = () => {
  if (window.scrollY != 0) {
    window.scrollTo(0, 0);
  }
};

export default useScrollToTop;
