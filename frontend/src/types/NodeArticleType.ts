interface NodeArticleType {
  id: string;
  attributes: {
    drupal_internal__nid: number;
    body: {
      summary?: string;
      value?: string;
    };
    title: string;
  }
}

export default NodeArticleType;
