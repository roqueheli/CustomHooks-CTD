import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";

const FetchApp = () => {
  const { data, isLoading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData('https://jsonplaceholder.typicode.com/users', 'GET');
  }, []);  

  return (
    <>
      <h2>Lista de usuarios</h2>
      <hr />
      {isLoading ? (
        <h4>Cargando...</h4>
      ) : error ? (
        <h4>Ha ocurrido un error</h4>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default FetchApp;
