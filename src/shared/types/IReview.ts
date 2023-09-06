export interface IReview {
  id: string;
  createdTime: string;
  fields: Fields;
}

interface Fields {
  content: string;
  assigneeName: string[];
  assigneeIcon: AssigneeIcon[];
}

interface AssigneeIcon {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
}
