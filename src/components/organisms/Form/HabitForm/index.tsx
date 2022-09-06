// #region Global Imports
import React, { useEffect } from 'react'
import { Field, Form, Formik, FormikProps } from 'formik'
import * as Yup from 'yup'
// #endregion Global Imports

// #region Local Imports
import { Label } from '../styled'

import { TextInput, Button, TextAreaInput } from '@/atoms/.'
import {
  CenteringFlexHorizontal,
  CenteringFlexVertical,
  EndFlexHorizontal,
} from '@/pages/styled'
import { useMyProfile } from '@/app/hooks/useMyProfile'
import { useCurrentBurner } from '@/app/hooks/useCurrentBurner'

import {
  useAddBurnerMutation,
  useAddHabitMutation,
  useUpdateBurnerMutation,
  useUpdateHabitMutation,
} from '@/graphql/generated'
// #endregion Local Imports

// #region Interface Imports
import { IHabitForm } from './types'
import {
  OnboardingFormContainer,
  OnboardingProgressBarContainer,
} from '@/pages/styled/Onboarding'
import { Alert, Spin } from 'antd'
import { DatePickerInput } from '@/atoms/Input/DatePicker'
// #endregion Interface Imports

export const HabitForm: React.FunctionComponent<IHabitForm.IProps> = ({
  onSuccess,
  editMode,
}: IHabitForm.IProps) => {
  const [profile, _] = useMyProfile()
  const [currentBurner, setCurrentBurner] = useCurrentBurner()
  const [addHabitMutation, { data, loading, error }] = useAddHabitMutation()
  const [
    updateHabitMutation,
    { data: dataUpdate, loading: loadingUpdate, error: errorUpdate },
  ] = useUpdateHabitMutation()

  const initialValues: IHabitForm.HabitFormValues = {
    name: '',
    startTime: '',
    endTime: '',
    description: '',
    isAtomic: '',
  }
  // !!currentHabit
  //   ? {
  //     name: currentHabit.name
  //     startTime: currentHabit.startTime
  //     endTime: currentHabit.endTime
  //     description: currentHabit.description
  //     isAtomic: currentHabit.isAtomic
  //     }
  //   :

  useEffect(() => {
    if (data) onSuccess.call(null)
    // This needs to trigger only if backend returned something meaningful
  }, [data])

  return (
    <OnboardingFormContainer>
      {error || errorUpdate ? (
        <Spin size="large" spinning={loading || loadingUpdate}>
          {(error || errorUpdate) && (
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="error"
            />
          )}
        </Spin>
      ) : (
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            // description: Yup.string()
            //   .max(50, 'Must be 50 characters or less')
            //   .required('Required'),
            // hashtag: Yup.string(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            const variables = {
              habitFields: {
                name: values.name,
                startTime: values.startTime,
                endTime: values.endTime,
                description: values.description,
                isAtomic: values.isAtomic,
              },
            }

            // if (currentBurner) {
            //   if (
            //     editMode &&
            //     Object.values(values).some(
            //       (v, i) =>
            //         v !==
            //         [
            //           currentBurner.name,
            //           currentBurner.metadata.description,
            //           currentBurner.metadata.hashtag,
            //         ][i],
            //     )
            //   ) {
            //     updateBurnerMutation({ variables })
            //     setCurrentBurner({
            //       name: values.name,
            //       metadata: {
            //         description: values.description,
            //         hashtag: values.hashtag,
            //       },
            //     })
            //   } else onSuccess.call(null)
            // } else {
            //   addBurnerMutation({
            //     variables,
            //   })
            // }
            setSubmitting(false)
          }}
        >
          {({ touched, errors, handleSubmit }: FormikProps<any>) => {
            return (
              <Form
                onSubmit={handleSubmit}
                aria-label="habit-form"
                id="habit-form"
                className="flex flex-col pt-2 pb-12 md:pb-24 md:relative gap-y-6"
              >
                <div className="w-full">
                  <Label htmlFor="name">Name:</Label>
                  <Field
                    component={TextInput}
                    id="name"
                    name="name"
                    placeholder="Pick a name to label your habit"
                  />
                  {errors &&
                    errors.name &&
                    touched &&
                    touched.name &&
                    errors && <Label warning>{errors.name}</Label>}
                </div>
                <div className="w-full">
                  <Label htmlFor="description">Description:</Label>
                  <Field
                    component={TextAreaInput}
                    id="description"
                    name="description"
                    placeholder="Write a longer description"
                  />
                  {errors &&
                    errors.description &&
                    touched &&
                    touched.description &&
                    errors && <Label warning>{errors.description}</Label>}
                </div>

                <CenteringFlexVertical>
                  <div className="w-1/2">
                    <Label htmlFor="date-start">Began Tracking:</Label>
                    <Field
                      component={DatePickerInput}
                      id="date-start"
                      name="date-start"
                    />
                  </div>
                  {/* <span className="mx-4 text-gray-500">to</span>
                  <div className="w-1/2">
                    <Label htmlFor="date-end">Track Until:</Label>
                    <Field
                      component={DatePickerInput}
                      id="date-end"
                      name="date-end"
                      placeholder=""
                    />
                  </div> */}
                </CenteringFlexVertical>

                <OnboardingProgressBarContainer>
                  <EndFlexHorizontal>
                    <div className="w-full h-6 bg-gray-200 rounded-full lg:hidden dark:bg-gray-700">
                      <div
                        className="h-6 bg-blue-600 rounded-full dark:bg-blue-500"
                        style={{ width: '40%' }}
                      ></div>
                    </div>

                    {/* 1024px+ button: */}
                    <div className="hidden h-full lg:block">
                      <Button
                        typeOfButton="submit"
                        size="lg"
                        text="Next"
                        iconName="forward"
                      />
                    </div>

                    {/* 1024px- button: */}
                    <button
                      type="submit"
                      className="my-2 ml-2 text-primary-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 lg:hidden"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </EndFlexHorizontal>
                </OnboardingProgressBarContainer>
              </Form>
            )
          }}
        </Formik>
      )}
    </OnboardingFormContainer>
  )
}
