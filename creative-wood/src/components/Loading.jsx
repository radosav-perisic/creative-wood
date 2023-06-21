import React, { useEffect, useState } from 'react';

const Loading = ({ children, apiEndpoint }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();

        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsLoading(false);
      } catch (error) {
        console.error('Error while loading data:', error);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
    };
  }, [apiEndpoint]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner" />
        <div className="backdrop" />
      </div>
    );
  }

  return children;
};

export default Loading;
