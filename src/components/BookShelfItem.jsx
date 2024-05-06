import { IoStarSharp } from "react-icons/io5";

const BookShelfItem = ({ title, author, coverImage, rating }) => {
  return (
    <div className="group rounded-lg relative max-w-[215px] overflow-hidden shadow-lg">
      <img
        className="rounded-lg overflow-hidden h-full group-hover:blur-[2px] duration-300"
        src={coverImage}
        alt={title}
      />
      <div className="absolute bottom-0 bg-[#fff] duration-300 opacity-0 group-hover:opacity-100 left-0 right-0 px-2 py-1">
        <h2 className="text-center font-semibold">{title}</h2>
        <p className="text-sm text-center">{author}</p>
        <div className="flex items-center justify-center py-1">
          {Array(rating).fill(<IoStarSharp className="text-yellow-500" />)}
        </div>
      </div>
    </div>
  );
};

export default BookShelfItem;
