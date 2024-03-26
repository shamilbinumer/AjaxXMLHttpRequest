import React, { useState, useEffect } from 'react';
import './Ajax.css'

const Ajax = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments');
        xhr.onload = function () {
          if (xhr.status === 200) {
            setData(JSON.parse(xhr.response));
          } else {
            setError(new Error(`Network response was not ok: ${xhr.status}`));
          }
          setIsLoading(false);
        };
        xhr.onerror = function () {
          setError(new Error('Network request failed'));
          setIsLoading(false);
        };
        xhr.send();
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once on component mount

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error fetching users: {error.message}</div>;
  }

  return (
    <div>
     <table>
    <tr>
        <th>#</th>
        <th>ID</th>
        <th>NAME</th>
        <th>email</th>
        <th>body</th>
    </tr>
    {
        data.map((data,index)=>
        <tr key={index}>
        <td>{index+1}</td>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.body}</td>
    </tr>
        )
    }
     </table>
    </div>
  );
};

export default Ajax;
