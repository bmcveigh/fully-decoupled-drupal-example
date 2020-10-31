import * as React from 'react';

import {
  Typography,
} from '@material-ui/core';
import EntitiesType from '../../types/EntitiesType'

interface Props {
  entities: EntitiesType[];
}

const Comments = (props: Props) => {
  return (
    <div>
      <Typography variant="h5">Comments</Typography>
      {props.entities ? props.entities.map(comment => (
        <div key={comment.entityId}>
          <Typography variant="body1">{comment.entityLabel}</Typography>
        </div>
      )) : null}
    </div>

  );
};

export default Comments;
