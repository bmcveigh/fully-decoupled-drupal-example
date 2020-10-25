interface NodeArticleType {
  entityId: string | number;
  entityLabel: string;
  body: {
    summary?: string;
    value?: string;
  };
}

export default NodeArticleType;
