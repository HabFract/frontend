export namespace IAvatar {
  export enum Type {
    'primary',
    'secondary',
    'default',
  }

  export interface IProps { description: string,  rounded: boolean, type: Type }

  // export interface IState {}

  // export interface IStateProps {}

  // namespace Actions {
  //   export interface IMapPayload {}
  //   export interface IMapResponse {}
  // }
}
