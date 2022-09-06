export declare namespace ICard {
  type TitleDict = { default: string; dark: string }
  export interface IProps {
    title: string
    subTitle?: string
    bodyText: string
    pillText?: string
    userText?: string
    topRightText?: string
    readMoreText?: string
    readMoreAction?: () => void
    children?: React.ReactNode
  }

  // export interface IState {}

  // export interface IStateProps {}

  // namespace Actions {
  //   export interface IMapPayload {}
  //   export interface IMapResponse {}
  // }
}
