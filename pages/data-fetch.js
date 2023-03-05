import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("api/book")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading book data...</p>;
  if (!data) return <p>No book found</p>;

  return (
    <div>
      <h1>My favorite book:</h1>
      <h2>{data.title}</h2>
      <p>{data.author}</p>
    </div>
  );
}
