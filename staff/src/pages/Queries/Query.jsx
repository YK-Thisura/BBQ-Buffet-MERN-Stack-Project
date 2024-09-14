// src/pages/Query/Query.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Query.css"; // Import the CSS file

const Query = ({ url }) => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get(`${url}/api/query`);
        setQueries(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQueries();
  }, [url]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="query-container">
      <h1>Query Data</h1>
      <ul className="query-list">
        {queries.map((query) => (
          <li key={query._id}>
            <h3>{query.title}</h3>
            <p>{query.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Query;
