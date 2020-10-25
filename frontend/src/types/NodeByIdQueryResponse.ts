import NodeArticleType from './NodeArticleType';

interface NodeByIdQueryResponse {
  data: {
    nodeById: NodeArticleType;
  };
}

export default NodeByIdQueryResponse;
