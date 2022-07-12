// #region Global Imports
import React from 'react'
import { Field, Form, Formik, FormikHelpers, FormikProps } from 'formik'
import * as Yup from 'yup'

import RightCircleOutlined from '@ant-design/icons/lib/icons/RightCircleOutlined'
import { Alert, Spin, Upload } from 'antd'
import Progress from 'antd/lib/progress/progress'
// #endregion Global Imports

// #region Interface Imports
import { ISignUpForm } from './types'
// #endregion Interface Imports

// #region Local Imports
import {
  OnboardingFormContainer,
  ImageUploadContainer,
  MakePublicContainer,
  OnboardingProgressBarContainer,
} from './styled'
import { CenteringFlexHorizontal } from '@/app/styled'

import {
  useAddUserMutation,
  UserProfileCreateParams,
} from '@/graphql/generated'

import { P } from '@/atoms/Typo/Copy/P'
import { TextInput } from '@/atoms/Input/Text'
import { SwitchInput } from '@/atoms/Input/Switch'
// #endregion Local Imports

export const SignUpForm: React.FunctionComponent<ISignUpForm.IProps> = (
  _props: ISignUpForm.IProps,
) => {
  const [addUserMutation, { data, loading, error }] = useAddUserMutation()
  const initialValues: ISignUpForm.SignUpFormValues = {
    username: '',
    location: '',
  }

  console.log('data, loading, data :>> ', data, loading, data)
  return (
    <OnboardingFormContainer>
      {loading || data || error ? (
        <Spin spinning={loading}>
          {error ? (
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="error"
            />
          ) : (
            data && (
              <Alert
                message="User Profile Created!"
                description="A user was created"
                type="success"
              />
            )
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
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log('values :>> ', values)

            addUserMutation({
              variables: {
                profileFields: {
                  nickname: values.username,
                  location: values.location,
                },
              },
            })
            setSubmitting(false)
          }}
        >
          {({ touched, errors, values, handleSubmit }: FormikProps<any>) => {
            console.log('touched,', touched)
            console.log(', errors,', errors)
            return (
              <Form onSubmit={handleSubmit}>
                <label htmlFor="username">
                  Username:
                  <Field
                    component={TextInput}
                    id="username"
                    name="username"
                    placeholder="Pick a username"
                  />
                </label>
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
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    // beforeUpload={'beforeUpload'}
                    onChange={() => {}}
                  >
                    Test
                    {/* {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
                  </Upload>
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
