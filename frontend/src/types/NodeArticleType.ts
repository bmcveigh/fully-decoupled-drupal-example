interface NodeArticleType {
  entityId: string | number;
  entityLabel: string;
  body: {
    summary: string;
  };
}

export default NodeArticleType;
