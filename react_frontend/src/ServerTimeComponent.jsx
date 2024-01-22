// src/components/ServerTimeComponent.jsx

import React from 'react';
import { useQuery } from '@tanstack/react-query';

const ServerTimeComponent = (props) => {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: [props.api],
    queryFn: async () => {
      try {
        const response = await fetch(`${props.api}`);
        const contentType = response.headers.get('content-type');
        
        // Check if the response is not JSON
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Invalid content type. Expected JSON.');
        }

        const result = await response.json();
        console.log('Data from API:', result); // Log the data
        return result;
      } catch (error) {
        console.error('Error fetching data:', error); // Log any errors
        throw error;
      }
    },
  });

  if (isLoading) return `Loading ${props.api}... `;

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div className="App">
      <p>---</p>
      <p>API: {data.api}</p>
      <p>Time from DB: {data.now}</p>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </div>
  );
};

export default ServerTimeComponent;
