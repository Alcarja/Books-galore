import { useState, useRef, useCallback } from "react";
import useBookSearch from "../Hooks/useBookSearch";
const Books = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
      console.log(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }
  return (
    <>
      <div className="search-bar">
        <h1>Search for your favourite books!</h1>
        <input
          placeholder="Search"
          className="input"
          type="text"
          value={query}
          onChange={handleSearch}
        />
      </div>
      <div className="container">
        {books.map((book, index) => (
          <div key={book.key} className="book-card">
            <h1>{book.title}</h1>
            {book.author_name && (
              <p>
                <h5>Author: </h5>
                {book.author_name}
              </p>
            )}
            {/* Check if book.first_sentence is an array and has at least one element */}
            {Array.isArray(book.first_sentence) &&
            book.first_sentence.length > 0 ? (
              <p>
                <h5>First sentence:</h5>
                {book.first_sentence[0].split(" ").slice(0, 40).join(" ")}
                ...
              </p>
            ) : (
              <p>No first sentence available</p>
            )}
            {book.published_year && (
              <p>Published Year: {book.first_publish_year}</p>
            )}
            {book.ratings_average && (
              <p>
                <h5>Rating:</h5> {book.ratings_average}
              </p>
            )}

            {Array.isArray(book.isbn) && book.isbn.length > 0 ? (
              <img
                src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}.jpg`}
                alt={`Cover of ${book.title}`}
              />
            ) : (
              <img
                src="./src/assets/Book-cover-dummy.jpeg"
                alt="Default Cover"
              />
            )}

            {books.length === index + 1 && <div ref={lastBookElementRef}></div>}
          </div>
        ))}
      </div>

      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </>
  );
};

export default Books;
