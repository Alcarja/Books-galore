// import { useEffect, useState } from "react";
// import axios from "axios";

// const useBookSearch = (query, pageNumber) => {
//   const controller = new AbortController();

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [books, setBooks] = useState([]);
//   const [hasMore, setHasMore] = useState(false);

//   const getBooks = async () => {
//     try {
//       const response = await axios.get(
//         `https://openlibrary.org/search.json?q=${query}`,
//         {
//           signal: controller.signal,
//           params: { q: query, page: pageNumber },
//         }
//       );
//       controller.abort();
//       console.log(response.data);
//       const parsedBooks = await response.data.docs;
//       setBooks((prevBooks) => {
//         return [
//           ...new Set([...prevBooks, ...parsedBooks.map((book) => book.title)]),
//         ];
//       });
//       setHasMore(parsedBooks.length > 0);
//       setLoading(false);
//     } catch (err) {
//       console.log(err);
//       setError(true);
//     }
//   };

//   useEffect(() => {
//     getBooks();
//     setLoading(true);
//     setError(false);
//   }, [query, pageNumber]);

//   return { loading, error, books, hasMore };
// };

// export default useBookSearch;

import { useEffect, useState } from "react";
import axios from "axios";

const useBookSearch = (query, pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  let controller;

  const fetchData = async () => {
    setLoading(true);
    setError(false);

    // Create a new AbortController for this request
    controller = new AbortController();

    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}`,
        {
          signal: controller.signal,
          params: { q: query, page: pageNumber },
        }
      );
      const parsedBooks = response.data.docs; //Sending the info back to the books component
      setBooks(parsedBooks);
      setHasMore(parsedBooks.length > 0);
      setLoading(false);
      console.log("Here are the books", response.data);
    } catch (err) {
      if (err.name === "AbortError") {
        // The request was canceled
      } else {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
    return () => {
      if (controller) {
        // Cleanup function to abort the request when the component unmounts or when the query changes
        controller.abort();
      }
    };
  }, [query, pageNumber]);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  return { loading, error, books, hasMore };
};

export default useBookSearch;
