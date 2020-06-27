import { useState, useEffect } from 'react';

const request = require('superagent');

const useGetMosData = () => {
  const API_KEY = '554c2f7092b09116e36b1b1484191133';
  const url = 'https://apidata.mos.ru/v1/datasets/2981/rows';
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await request.get(url).query({api_key: API_KEY});
        setIsLoading(false);
        if (!response.badRequest && response.status === 200) {
          setData(response.body);
        } else {
          setIsError(true);
        }
      } catch (e) {
        setIsError(true);
        console.log(e);
      }
    }
    getData();
  }, []);
  return {
    isLoading,
    isError,
    data,
  };
};

export default useGetMosData;
