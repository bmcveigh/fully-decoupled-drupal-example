import NodeArticleType from './NodeArticleType'

interface NodeArticlesQueryResponse {
  data: {
    nodeQuery: {
      entities: NodeArticleType[];
    };
  };
}

export default NodeArticlesQueryResponse;
