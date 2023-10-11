import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function ReactQueryExample() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoDatah"], // this
    // staleTime: Infinity,
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
        console.log("fetching data.....");
        return res.json();
      }),
  });

  useEffect(() => {
    console.log("component did mount..................");
    return () => console.log("component did destroy....");
  }, []);

  //    fetch("https://api.github.com/repos/TanStack/query").then((res) =>
  // res.json()
  // )
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //       .then(response => response.json())

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data?.name || data?.userId}</h1>
      {/* <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong> */}
    </div>
  );
}
