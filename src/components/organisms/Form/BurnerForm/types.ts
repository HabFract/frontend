import { BurnerCreateUpdateParams } from '@/graphql/generated'
import { FormikHelpers } from 'formik/dist/types'

type InputValues = BurnerCreateUpdateParams

export declare namespace IBurnerForm {
  export interface IProps {
    onSuccess: () => void
    editMode: boolean
  }
  export interface BurnerFormValues extends InputValues {}

  export interface ISubmitHandlerProps {
    values: BurnerFormValues
    setSubmitting: FormikHelpers<BurnerFormValues>
  }
}
