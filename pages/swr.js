import useSWR from "swr";

export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("api/user", fetcher);

  if (error) return <p>No person found</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>The winner of the competition:</h1>
      <h2>
        {data.name} {data.surname}
      </h2>
    </div>
  );
}
