export interface Schema {
  entityName: string;
  fields: {
    name: string;
    label: string;
    showInList: boolean;
  }[];
}