interface NodeArticleType {
  id: string;
  attributes: {
    drupal_internal__nid: number;
    created: string;
    body: {
      summary?: string;
      value?: string;
    };
    title: string;
  },
  relationships: {
    uid: {
      links: {
        related: {
          href: string;
        }
      };
    };
  };
}

export default NodeArticleType;
