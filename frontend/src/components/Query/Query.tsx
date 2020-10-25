import React from 'react';
import { useQuery } from 'react-apollo';
import { Backdrop, CircularProgress } from '@material-ui/core'

interface IQuery extends Readonly<any> {
  children: any;
  query: any;
  id?: any;
  variables?: any;
}

const Query: ({ children, query, id, variables }: IQuery) => (any) = ({ children, query, id, variables }) => {
  if (!variables) {
    variables = {};
  }
  if (id) {
    variables.id = id;
  }

  const { data, loading, error } = useQuery(query, {
    variables: variables
  });

  if (loading) return (
    <Backdrop open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;
