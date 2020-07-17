export interface Task {
  id: number;
  title: string;
  asignee?: string;
  is_done: boolean;
}
