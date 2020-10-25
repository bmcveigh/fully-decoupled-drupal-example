import React from 'react';
import { Typography } from '@material-ui/core';
import NodeArticleType from '../../types/NodeArticleType';

interface Props {
  node: NodeArticleType;
}

const NodeArticle = (props: Props) => {
  const node = props.node;

  return (
    <div>
      <Typography variant="h3">
        {node.entityLabel}
      </Typography>
      {node.body.summary ? (
        <Typography variant="body1">
          {node.body.summary}
        </Typography>
      ) : null}
    </div>
  );
}

export default NodeArticle;
