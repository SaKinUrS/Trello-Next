import { IBase } from './root.models';

export enum EnumTaskPriority {
  LOW = 'low',
  HIGH = 'high',
  MEDIUM = 'medium'
}

export interface ITask extends IBase {
  name: string
  priority: EnumTaskPriority
  isCompleted: boolean
}

export type TypeTaskFormState = Partial<Omit<ITask, 'id' | 'updatedAt'>>