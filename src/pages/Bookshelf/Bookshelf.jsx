import Banner from "../../components/Banner";

import BookShelfItem from "../../components/BookShelfItem";

import { BookShelf } from "../../data/ContentData";

const Bookshelf = () => {
  return (
    <div className="relative w-[90vw] sm:w-full max-w-widthScreen pt-[150px] sm:pt-[300px] mx-auto">
      <Banner
        title="Bookshelf"
        subtitle="Books and pieces of wisdom I’ve enjoyed reading"
      />
      <div className="grid sm:grid-cols-4 grid-cols-2 mt-10 gap-4">
        {BookShelf.map((book, idx) => (
          <BookShelfItem
            key={idx}
            title={book.title}
            author={book.author}
            coverImage={book.coverImage}
            rating={book.stars}
          />
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
