// #region Global Imports
import React from 'react'
import { Alert, Spin, Switch, Upload } from 'antd'
import { Field, Form, Formik } from 'formik'
import RightCircleOutlined from '@ant-design/icons/lib/icons/RightCircleOutlined'
// import { useNavigate } from 'react-router-dom'
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
import Progress from 'antd/lib/progress/progress'
import { P } from '@/atoms/Typo/Copy/P'
import { TextInput } from '@/atoms/Input/Text'
import { CenteringFlexHorizontal } from '@/app/styled'
import {
  useAddUserMutation,
  UserProfileCreateParams,
} from '@/graphql/generated'
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
      {error || loading ? (
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
          onSubmit={(values, actions) => {
            addUserMutation({
              variables: {
                profileFields: {
                  nickname: values.username,
                  location: values.location,
                },
              },
            })
            actions.setSubmitting(false)
          }}
        >
          {({ touched, errors, values, handleSubmit }) => {
            console.log('touched, errors ', touched, errors)
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
                    <Switch id="public" onChange={() => {}} />
                  </label>
                  <P
                    copyText="Going public will enable sharing and trading
of habit structures, but isn’t required to use the app."
                  />
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
