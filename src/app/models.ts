export interface TreeNodeDataModel {
  item: DataModel;
  id: number;
}

export interface DataModel {
  name: string;
  type?: string;
  children?: DataModel[];
  isCollapsed?: boolean;
}

export interface Margin {
  top: number;
  left: number;
  right: number;
  bottom: number;
}
