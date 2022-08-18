// #region Global Imports
// #endregion Interface Imports
// #region Local Imports
import {
  OnboardingFormContainer,
  ImageUploadContainer,
  MakePublicContainer,
  OnboardingProgressBarContainer,
} from './styled'
// #endregion Global Imports
// #region Interface Imports
import { ISignUpForm } from './types'
import { CenteringFlexHorizontal } from '@/app/styled'
import { ImageUploadInput } from '@/atoms/Input/ImageUpload'
import { SwitchInput } from '@/atoms/Input/Switch'
import { TextInput } from '@/atoms/Input/Text'
import { P } from '@/atoms/Typo/Copy/P'
import { useAddUserMutation } from '@/graphql/generated'
import RightCircleOutlined from '@ant-design/icons/lib/icons/RightCircleOutlined'
import { Alert, Spin, Upload } from 'antd'
import Progress from 'antd/lib/progress/progress'
import { Field, Form, Formik, FormikProps } from 'formik'
import React, { useEffect } from 'react'
import { createRoutesFromChildren } from 'react-router-dom'
import * as Yup from 'yup'

// #endregion Local Imports

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
              <Form onSubmit={handleSubmit} aria-label="sign-up-form">
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
                    component={ImageUploadInput}
                    id="avatar-upload"
                    name="avatar-upload"
                  />
                  <P copyText="Add a user avatar and people can relate visually *" />
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
                    <Progress percent={20} type="line" showInfo={false} />
                    <button type="submit" className="w-12 h-12">
                      <RightCircleOutlined />
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
