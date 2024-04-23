import { IBase } from './root.models';

export interface ITimeBlock extends IBase{
  name: string
  color?: string
  duration: number
  order: number
}

export type TypeTimeBlockFormState = Partial<Omit<ITimeBlock, 'createdAt' | 'updatedAt'>>