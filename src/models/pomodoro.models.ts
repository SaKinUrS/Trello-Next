import { IBase } from './root.models';

export interface IPomodoroRound extends IBase{
  isCompleted: boolean
  totalSeconds: number
}

export interface IPomodoroSessionResponse extends IBase {
  isCompleted: boolean
  rounds: IPomodoroRound[]
}
export type TypePomodoroSessionFormState = Partial<Omit<IPomodoroSessionResponse, 'id' | 'createdAt' | 'updatedAt'>>
export type TypePomodoroRoundState = Partial<Omit<IPomodoroRound, 'id' | 'createdAt' | 'updatedAt'>>