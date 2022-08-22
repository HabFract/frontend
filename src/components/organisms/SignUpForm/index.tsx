// #region Global Imports
import React, { useEffect } from 'react'
import { Field, Form, Formik, FormikProps } from 'formik'
import * as Yup from 'yup'
// #endregion Global Imports

// #region Local Imports
import {
  OnboardingFormContainer,
  ImageUploadContainer,
  MakePublicContainer,
  OnboardingProgressBarContainer,
} from './styled'
import { CenteringFlexHorizontal } from '@/app/styled'

import { ImageUploadInput } from '@/atoms/Input/ImageUpload'
import { SwitchInput } from '@/atoms/Input/Switch'
import { TextInput } from '@/atoms/Input/Text'
import { P } from '@/atoms/Typo/Copy/P'

import { useAddUserMutation } from '@/graphql/generated'
// #endregion Local Imports

// #region Interface Imports
import { ISignUpForm } from './types'
import { Alert, Spin, Upload } from 'antd'
// #endregion Interface Imports

export const SignUpForm: React.FunctionComponent<ISignUpForm.IProps> = ({
  onSuccess,
}: ISignUpForm.IProps) => {
  const [addUserMutation, { data, loading, error }] = useAddUserMutation()
  const initialValues: ISignUpForm.SignUpFormValues = {
    username: '',
    location: '',
    avatar: '',
    isPublic: false,
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
            username: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            location: Yup.string().max(20, 'Must be 20 characters or less'),
            avatar: Yup.string(),
            isPublic: Yup.boolean(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            addUserMutation({
              variables: {
                profileFields: {
                  nickname: values.username,
                  location: values.location,
                  avatar: values.avatar,
                  // TODO implement isPublic
                  // isPublic: values.isPublic.toString(),
                },
              },
            })
            setSubmitting(false)
          }}
        >
          {({ touched, errors, handleSubmit }: FormikProps<any>) => {
            // console.log('touched,', touched)
            // console.log(', errors,', errors)
            return (
              <Form
                onSubmit={handleSubmit}
                aria-label="sign-up-form"
                className="flex flex-col p-4 gap-y-4"
              >
                <label htmlFor="username">
                  Username:
                  <Field
                    component={TextInput}
                    id="username"
                    name="username"
                    placeholder="Pick a username"
                  />
                </label>
                <P
                  copyText={`${
                    (touched &&
                      touched.username &&
                      errors &&
                      errors.username) ||
                    ''
                  }`}
                ></P>
                <label htmlFor="location">
                  Location:
                  <Field
                    component={TextInput}
                    id="location"
                    name="location"
                    placeholder="Pick a location"
                  />
                </label>
                <ImageUploadContainer>
                  <Field
                    className="grid mr-2 place-content-end"
                    component={ImageUploadInput}
                    id="avatar-upload"
                    name="avatar-upload"
                  />
                  <div className="grid w-1/4 mr-2 md:w-1/2">
                    <P copyText="Add a user avatar and people can relate visually *" />
                  </div>
                </ImageUploadContainer>
                <MakePublicContainer>
                  <label htmlFor="public">
                    Make Profile Public
                    <Field component={SwitchInput} id="public" name="public" />
                  </label>
                  <P copyText="Going public will enable sharing and trading of habit structures, but isn’t required to use the app." />
                </MakePublicContainer>
                <OnboardingProgressBarContainer>
                  <CenteringFlexHorizontal>
                    <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
                      <div
                        className="h-6 bg-blue-600 rounded-full dark:bg-blue-500"
                        style={{ width: '20%' }}
                      ></div>
                    </div>
                    <button
                      type="submit"
                      className="my-2 ml-2 text-primary-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </CenteringFlexHorizontal>
                </OnboardingProgressBarContainer>
              </Form>
            )
          }}
        </Formik>
      )}
    </OnboardingFormContainer>
  )
}
