import { FormikHelpers } from 'formik/dist/types'

export declare namespace ISignUpForm {
  export interface IProps {}
  export interface SignUpFormValues {
    username: string
    location: string
    avatar: string
    isPublic: boolean
  }

  export interface ISubmitHandlerProps {
    values: SignUpFormValues
    setSubmitting: FormikHelpers<SignUpFormValues>
  }

  // export interface IStateProps {}

  // namespace Actions {
  //   export interface IMapPayload {}
  //   export interface IMapResponse {}
  // }
}
