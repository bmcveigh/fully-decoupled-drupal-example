import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core'
import axios from 'axios'
import { useQuery } from 'react-query'

interface IQuery extends Readonly<any> {
  children: any;
  endpoint: string;
  id?: any;
  variables?: any;
}



const Query: ({ children, id, endpoint }: IQuery) => (any) = ({ children, id, endpoint }) => {
  let loading = true
  let error = false

  const data = useQuery(endpoint, async () => {
    const href = endpoint.indexOf('http') === 0 ? endpoint : `${process.env.REACT_APP_BACKEND_URL}/api/${endpoint}`;
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
