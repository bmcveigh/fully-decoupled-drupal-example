import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core'
import axios from 'axios'
import { useQuery } from 'react-query'

interface IQuery extends Readonly<any> {
  children: any;
  endpoint: string;
  query?: any;
}



const Query: ({ children, endpoint, query }: IQuery) => (any) = ({
  children,
  endpoint,
  query,
}) => {
  let loading = true
  let error = false

  const data = useQuery(endpoint, async () => {
    let queryString = ''

    if (query) {
      const params = new URLSearchParams(query)
      queryString = `?${params.toString()}`
    }

    const href = endpoint.indexOf('http') === 0 ? endpoint : `${process.env.REACT_APP_BACKEND_URL}/api/${endpoint}${queryString}`;
    const { data } = await axios.get(href);
    return data;
  })

  if (data.data) {
    loading = false
  }

  if (loading) {
    return (
      <Backdrop open={true}>
        <CircularProgress color="inherit"/>
      </Backdrop>
    )
  }
  if (error) {
    return error
  }
  return children({ data })
};

export default Query;
