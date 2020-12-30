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
    const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/${endpoint}`)
    return data
  })

  if (data) {
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
