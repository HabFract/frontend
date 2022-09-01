// #region Global Imports
import React, { useEffect } from 'react'
import { Field, Form, Formik, FormikProps } from 'formik'
import * as Yup from 'yup'
// #endregion Global Imports

// #region Local Imports
import { ImageUploadContainer, Label, MakePublicContainer } from '../styled'

import { P, TextInput, Button, SwitchInput } from '@/atoms/.'
import { ImageUploadInput } from '@/atoms/Input/ImageUpload'

import { EndFlexHorizontal, SpaceFlex } from '@/pages/styled'
import { useMyProfile } from '@/app/hooks/useMyProfile'

import {
  OnboardingFormContainer,
  OnboardingProgressBarContainer,
} from '@/pages/styled/Onboarding'
import { useAddUserMutation, useUpdateUserMutation } from '@/graphql/generated'
// #endregion Local Imports

// #region Interface Imports
import { IProfileForm } from './types'
import { Spin, Alert } from 'antd'
// #endregion Interface Imports

export const ProfileForm: React.FunctionComponent<IProfileForm.IProps> = ({
  onSuccess,
  editMode,
}: IProfileForm.IProps) => {
  const [profile, setProfile] = useMyProfile()
  const [addUserMutation, { data, loading, error }] = useAddUserMutation()
  const [
    updateUserMutation,
    { data: dataUpdate, loading: loadingUpdate, error: errorUpdate },
  ] = useUpdateUserMutation()

  const initialValues: IProfileForm.ProfileFormValues =
    editMode && !!profile
      ? {
          nickname: profile.nickname,
          location: profile.fields.location,
          avatar: profile.fields.avatar,
          isPublic: profile.fields.isPublic,
        }
      : {
          nickname: '',
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
      {error || errorUpdate ? (
        <Spin spinning={loading || loadingUpdate}>
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
            nickname: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            location: Yup.string().max(20, 'Must be 20 characters or less'),
            avatar: Yup.string(),
            isPublic: Yup.boolean(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            const variables = {
              profileFields: {
                nickname: values.nickname,
                location: values.location,
                avatar: values.avatar,
                // TODO implement isPublic
              },
            }
            if (profile) {
              if (
                editMode &&
                Object.values(values).some(
                  (v, i) =>
                    v !==
                    [
                      profile.nickname,
                      profile.fields.location,
                      profile.fields.avatar,
                      profile.fields.isPublic,
                    ][i],
                )
              ) {
                updateUserMutation({ variables })
                setProfile({
                  nickname: values.nickname,
                  fields: { location: values.location, avatar: values.avatar },
                })
              } else onSuccess.call(null)
            } else {
              addUserMutation({ variables })
            }
            setSubmitting(false)
          }}
        >
          {({ touched, errors, handleSubmit }: FormikProps<any>) => {
            return (
              <Form
                onSubmit={handleSubmit}
                aria-label="profile-form"
                id="profile-form"
                className="flex flex-col py-2 pb-12 md:relative gap-y-6"
              >
                <div className="w-full">
                  <Label htmlFor="nickname">Nickname:</Label>
                  <Field
                    component={TextInput}
                    id="nickname"
                    name="nickname"
                    placeholder="Pick a nickname"
                  />
                  {errors &&
                    errors.nickname &&
                    touched &&
                    touched.nickname &&
                    errors && <Label warning>{errors.nickname}</Label>}
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
                  <SpaceFlex space="around">
                    <Field
                      className="max-w-full mr-2"
                      component={ImageUploadInput}
                      id="avatar-upload"
                      name="avatar-upload"
                    />
                    <div
                      style={{
                        flexBasis: '33%',
                        margin: '0 0 0 2rem',
                      }}
                    >
                      <P
                        copyText="Add a user avatar and people can relate visually *"
                        level={2}
                      />
                    </div>
                  </SpaceFlex>
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
