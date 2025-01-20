import { useEffect, useState } from "react";
import { useFetch } from "../customHook/UseFetchHook";

const UseEffectHook = () => {
  const api = "https://fakestoreapi.com/products";

  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState();

  const fetchProd = async (Api) => {
    try {
      const data1 =await useFetch(Api);
      console.log({ data1 });
      setData(data1);
      setloading(false);
    } catch (error) {
        setError(error)
    }

  };
  useEffect(() => {
    try {
      fetchProd(api)
    } catch (error) {
      setError(error);
    }
  }, []);

  if (error) {
    return (
      <>
        <h1>Error MSG : {error.message}</h1>
        <h1>Status : {error.status ? error.status : "401"}</h1>
      </>
    );
  }

  return loading ? (
    <>
      <h1>loading.......</h1>
    </>
  ) : (
    <>
      <h1>Hi useEffect Hook</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((entry) => {
            return (
              <tr key={entry.id}>
                <td>{entry.title}</td>
                <td>{entry.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UseEffectHook;
