import { HabitCreateParams } from '@/graphql/generated'
import { FormikHelpers } from 'formik/dist/types'

type InputValues = HabitCreateParams

export declare namespace IHabitForm {
  export interface IProps {
    onSuccess: () => void
    editMode: boolean
  }
  export interface HabitFormValues extends InputValues {
    id?: string
  }

  export interface ISubmitHandlerProps {
    values: HabitFormValues
    setSubmitting: FormikHelpers<HabitFormValues>
  }
}
