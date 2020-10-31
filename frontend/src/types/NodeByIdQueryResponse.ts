import NodeArticleType from './NodeArticleType';
import EntitiesType from './EntitiesType';

interface NodeByIdQueryResponse {
  data: {
    nodeById: NodeArticleType;
    commentQuery: {
      entities:  EntitiesType[];
    };
  };
}

export default NodeByIdQueryResponse;
