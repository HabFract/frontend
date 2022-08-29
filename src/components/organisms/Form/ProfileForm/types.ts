import { UserProfileCreateUpdateParams } from '@/graphql/generated'
import { FormikHelpers } from 'formik/dist/types'

type InputValues = UserProfileCreateUpdateParams

export declare namespace IProfileForm {
  export interface IProps {
    onSuccess: () => void
    onUpdateSuccess: () => void
    editMode: boolean
  }
  export interface ProfileFormValues extends InputValues {}

  export interface ISubmitHandlerProps {
    values: ProfileFormValues
    setSubmitting: FormikHelpers<ProfileFormValues>
  }
}
