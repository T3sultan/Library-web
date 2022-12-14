import { useEffect, useState } from "react";

const useBooks = () => {
  const [myBooks, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);
  return [myBooks, setBooks];
};
export default useBooks;
