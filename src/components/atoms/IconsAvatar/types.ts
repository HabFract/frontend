export namespace IAvatar {
  export enum Type {
    Primary = 'primary',
    Secondary = 'secondary',
    Default = 'default',
  }

  export interface IProps { description: string,  rounded: boolean, type: Type }

  // export interface IState {}

  // export interface IStateProps {}

  // namespace Actions {
  //   export interface IMapPayload {}
  //   export interface IMapResponse {}
  // }
}
