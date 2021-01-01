interface NodeUserType {
  type: 'user--user';
  id: string;
  attributes: {
    display_name: string;
    drupal_internal__uid: number;
    created: string;
    changed: string;
    name: string;
    mail: string;
  }
}

export default NodeUserType;
