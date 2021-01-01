import * as React from 'react';
import Query from '../Query/Query'
import { ReactElement } from 'react'
import NodeUserQueryResponseType from '../../types/NodeUserQueryResponseType';

interface Props {
  href: string;
  display: 'username' | 'full';
}

const NodeUser = (props: Props) => {
  return (
    <Query endpoint={props.href}>
      {(results: NodeUserQueryResponseType): ReactElement|null => {
        if (!results.data) {
          return null;
        }
        const response = results.data;

        if (!response.data) {
          return null;
        }

        const user = response.data.data;

        switch (props.display) {
          case 'full':
            return (
              <div>{user.attributes.display_name}</div>
            );

          default:
            return <span>{user.attributes.display_name}</span>;
        }
      }}
    </Query>
  );
};

export default NodeUser;
