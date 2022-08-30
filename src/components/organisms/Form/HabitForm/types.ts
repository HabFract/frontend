import { BurnerCreateParams } from '@/graphql/generated'
import { FormikHelpers } from 'formik/dist/types'

type InputValues = BurnerCreateParams

export declare namespace IHabitForm {
  export interface IProps {
    onSuccess: () => void
    editMode: boolean
  }
  export interface HabitFormValues extends InputValues {}

  export interface ISubmitHandlerProps {
    values: HabitFormValues
    setSubmitting: FormikHelpers<HabitFormValues>
  }
}
