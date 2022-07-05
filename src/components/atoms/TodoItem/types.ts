import { Todo } from '@/app/types'

export declare namespace ITodoItem {
  export interface IProps {
    todo: Todo
    handleDestroy?: (ev: any) => void
    handleToggle?: (ev: any) => void
  }

  // export interface IState {}

  // export interface IStateProps {}

  // namespace Actions {
  //   export interface IMapPayload {}
  //   export interface IMapResponse {}
  // }
}
