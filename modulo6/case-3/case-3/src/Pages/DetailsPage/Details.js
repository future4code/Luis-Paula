import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../../API/getRequests';

export const DetailsPage = () => {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getDetails(setData, params.id);
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Details</h1>
      {data.title}
    </div>
  );
};
