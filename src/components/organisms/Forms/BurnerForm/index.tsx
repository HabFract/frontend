// #region Global Imports
import React, { useEffect } from 'react'
import { Field, Form, Formik, FormikProps } from 'formik'
import * as Yup from 'yup'
// #endregion Global Imports

// #region Local Imports
import { Label } from '../styled'

import { TextInput, Button } from '@/atoms/.'
import { EndFlexHorizontal } from '@/pages/styled'
import { useMyProfile } from '@/app/hooks/useMyProfile'

import { useAddBurnerMutation } from '@/graphql/generated'
// #endregion Local Imports

// #region Interface Imports
import { IBurnerForm } from './types'
import { Alert, Spin } from 'antd'
import {
  OnboardingFormContainer,
  OnboardingProgressBarContainer,
} from '@/pages/styled/Onboarding'
// #endregion Interface Imports

export const BurnerForm: React.FunctionComponent<IBurnerForm.IProps> = ({
  onSuccess,
  editMode,
}: IBurnerForm.IProps) => {
  const [profile, _] = useMyProfile()
  const [addBurnerMutation, { data, loading, error }] = useAddBurnerMutation()

  const initialValues: IBurnerForm.BurnerFormValues = {
    name: '',
    description: '',
    hashtag: '',
  }

  useEffect(() => {
    if (data) onSuccess.call(null)
    // This needs to trigger only if backend returned something meaningful
  }, [data])

  return (
    <OnboardingFormContainer>
      {error ? (
        <Spin spinning={loading}>
          {error && (
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="error"
            />
          )}
        </Spin>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            desription: Yup.string()
              .max(50, 'Must be 50 characters or less')
              .required('Required'),
            hashtag: Yup.string(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            // useAddBurnerMutation({
            //   variables: {

            //     name: values.name,
            //     description: values.description,
            //     hashtag: values.hashtag,
            //   },
            // })
            setSubmitting(false)
          }}
        >
          {({ touched, errors, handleSubmit }: FormikProps<any>) => {
            return (
              <Form
                onSubmit={handleSubmit}
                aria-label="new-burner-form"
                id="new-burner-form"
                className="flex flex-col py-2 md:relative gap-y-6"
              >
                <div className="w-full">
                  <Label htmlFor="name">Name:</Label>
                  <Field
                    component={TextInput}
                    id="name"
                    name="name"
                    placeholder="Pick a descriptive name"
                  />
                  {errors &&
                    errors.name &&
                    touched &&
                    touched.name &&
                    errors && <Label warning>{errors.name}</Label>}
                </div>
                <div className="w-full">
                  <Label htmlFor="location">Location:</Label>
                  <Field
                    component={TextInput}
                    id="location"
                    name="location"
                    placeholder="Pick a location"
                  />
                </div>

                <OnboardingProgressBarContainer>
                  <EndFlexHorizontal>
                    <div className="w-full h-6 bg-gray-200 rounded-full lg:hidden dark:bg-gray-700">
                      <div
                        className="h-6 bg-blue-600 rounded-full dark:bg-blue-500"
                        style={{ width: '40%' }}
                      ></div>
                    </div>
                    <button
                      type="submit"
                      className="my-2 ml-2 text-primary-500"
                    >
                      {/* 1024px+ button: */}
                      <div className="hidden h-full lg:block">
                        <Button
                          typeOfButton="primary"
                          size="lg"
                          text="Next"
                          onClick={() => {}}
                          iconName="forward"
                        />
                      </div>
                      {/* 1024px- button: */}
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
