import { BurnerCreateParams } from '@/graphql/generated'
import { FormikHelpers } from 'formik/dist/types'

type InputValues = BurnerCreateParams

export declare namespace IBurnerForm {
  export interface IProps {
    onSuccess?: () => void
    editMode: boolean
  }
  export interface BurnerFormValues extends InputValues {
    id?: string
  }

  export interface ISubmitHandlerProps {
    values: BurnerFormValues
    setSubmitting: FormikHelpers<BurnerFormValues>
  }
}
