// #region Global Imports
import React, { useEffect } from 'react'
import { Field, Form, Formik, FormikProps } from 'formik'
import * as Yup from 'yup'
// #endregion Global Imports

// #region Local Imports
import { Label } from '../styled'

import { TextInput, Button, TextAreaInput } from '@/atoms/.'
import { EndFlexHorizontal } from '@/pages/styled'
import { useCurrentBurner } from '@/app/hooks/useCurrentBurner'

import {
  useAddBurnerMutation,
  useUpdateBurnerMutation,
} from '@/graphql/generated'
// #endregion Local Imports

// #region Interface Imports
import { IBurnerForm } from './types'
import {
  OnboardingFormContainer,
  OnboardingProgressBarContainer,
} from '@/pages/styled/Onboarding'
import { Alert, Spin } from 'antd'
// #endregion Interface Imports

export const BurnerForm: React.FunctionComponent<IBurnerForm.IProps> = ({
  onSuccess,
  editMode,
}: IBurnerForm.IProps) => {
  const [currentBurner, setCurrentBurner] = useCurrentBurner()
  const [addBurnerMutation, { data, loading, error }] = useAddBurnerMutation()
  const [
    updateBurnerMutation,
    { data: dataUpdate, loading: loadingUpdate, error: errorUpdate },
  ] = useUpdateBurnerMutation()

  const initialValues: IBurnerForm.BurnerFormValues = !!currentBurner
    ? {
        name: currentBurner.name,
        description: currentBurner.metadata?.description,
        hashtag: currentBurner.metadata?.hashtag,
      }
    : {
        name: '',
        description: '',
        hashtag: '',
      }

  useEffect(() => {
    if (data) {
      setCurrentBurner({
        ...currentBurner,
        id: data.createBurner.node.id,
      })
      onSuccess!.call(null)
    }
    // This needs to trigger only if backend returned something meaningful
  }, [data])

  return (
    <OnboardingFormContainer>
      {error || errorUpdate ? (
        <Spin size="large" spinning={loading || loadingUpdate}>
          {(error || errorUpdate) && (
            <Alert
              message="Alert message title"
              description={`${error || errorUpdate}`}
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
            description: Yup.string()
              .max(50, 'Must be 50 characters or less')
              .required('Required'),
            hashtag: Yup.string(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            let variables = {
              burnerFields: {
                name: values.name,
                description: values.description,
                hashtag: values.hashtag,
              },
            }

            if (currentBurner?.id) {
              if (
                editMode &&
                Object.values(values).some(
                  (v, i) =>
                    v !==
                    [
                      currentBurner.name,
                      currentBurner.metadata.description,
                      currentBurner.metadata.hashtag,
                    ][i],
                )
              ) {
                updateBurnerMutation({
                  variables: {
                    burnerFields: {
                      id: currentBurner?.id,
                      ...variables.burnerFields,
                    },
                  },
                })
              } else onSuccess!.call(null)
            } else {
              addBurnerMutation({
                variables,
              })
            }
            setCurrentBurner({
              ...currentBurner,
              name: values.name,
              metadata: {
                description: values.description,
                hashtag: values.hashtag,
              },
            })
            setSubmitting(false)
          }}
        >
          {({ touched, errors, handleSubmit }: FormikProps<any>) => {
            return (
              <Form
                onSubmit={handleSubmit}
                aria-label="burner-form"
                id="burner-form"
                className="flex flex-col pt-2 pb-12 md:pb-24 md:relative gap-y-6"
              >
                <div className="w-full">
                  <Label htmlFor="name">Name:</Label>
                  <Field
                    component={TextInput}
                    id="name"
                    name="name"
                    placeholder="Pick a name to label your burner"
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
                <div className="w-full">
                  <Label htmlFor="hashtag">Hashtag:</Label>
                  <Field
                    component={TextInput}
                    id="hashtag"
                    name="hashtag"
                    placeholder="Pick a hashtag for social discovery"
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
