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
  Label,
} from './styled'

import { ImageUploadInput } from '@/atoms/Input/ImageUpload'
import { SwitchInput } from '@/atoms/Input/Switch'
import { TextInput } from '@/atoms/Input/Text'
import { P } from '@/atoms/Typo/Copy/P'

import { useAddUserMutation } from '@/graphql/generated'
// #endregion Local Imports

// #region Interface Imports
import { ISignUpForm } from './types'
import { Alert, Spin } from 'antd'
import { CenteringFlexHorizontal, EndFlexHorizontal } from '@/pages/styled'
import { ButtonContainer } from '@/atoms/Button/General/styled'
import { ColoredSvg } from '@/atoms/Icon/ColoredSvg'
import { Button } from '@/atoms/Button/General'
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
            return (
              <Form
                onSubmit={handleSubmit}
                aria-label="sign-up-form"
                id="sign-up-form"
                className="flex flex-col py-2 md:relative gap-y-6"
              >
                <div className="w-full">
                  <Label htmlFor="username">Username:</Label>
                  <Field
                    component={TextInput}
                    id="username"
                    name="username"
                    placeholder="Pick a username"
                  />
                  {errors &&
                    errors.username &&
                    touched &&
                    touched.username &&
                    errors && <Label warning>{errors.username}</Label>}
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
                <ImageUploadContainer>
                  <CenteringFlexHorizontal>
                    <Field
                      className="grid mr-2 place-content-end"
                      component={ImageUploadInput}
                      id="avatar-upload"
                      name="avatar-upload"
                    />
                    <div style={{ flexBasis: '33%', margin: '0 0 0 2rem' }}>
                      <P
                        copyText="Add a user avatar and people can relate visually *"
                        level={2}
                      />
                    </div>
                  </CenteringFlexHorizontal>
                </ImageUploadContainer>
                <MakePublicContainer>
                  <div className="flex justify-around w-1/2">
                    <Label htmlFor="public">Make Profile Public</Label>
                    <Field component={SwitchInput} id="public" name="public" />
                  </div>
                  <div className="px-4 mb-6">
                    <P
                      copyText="Going public will enable sharing and trading of habit structures, but isn’t required to use the app."
                      level={4}
                    />
                  </div>
                </MakePublicContainer>
                <OnboardingProgressBarContainer>
                  <EndFlexHorizontal>
                    <div className="w-full h-6 bg-gray-200 rounded-full lg:hidden dark:bg-gray-700">
                      <div
                        className="h-6 bg-blue-600 rounded-full dark:bg-blue-500"
                        style={{ width: '20%' }}
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
