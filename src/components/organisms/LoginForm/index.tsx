// #region Global Imports
import React from 'react'
import { Field, Form, Formik } from 'formik'
// import { useNavigate } from 'react-router-dom'
// #endregion Global Imports

// #region Interface Imports
import { ILoginForm } from './types'
// #endregion Interface Imports

// #region Local Imports
import { Switcher } from '@/app/theme/switch'
import { Bottom, Container, MainText, Middle, SubText, Top } from './styled'
// #endregion Local Imports

export const LoginForm: React.FunctionComponent<ILoginForm.IProps> = (
  _props: ILoginForm.IProps,
) => {
  const initialValues: ILoginForm.LoginFormValues = { username: '' }
  // const navigate = useNavigate()

  return (
    <Container>
      <Switcher></Switcher>
      <Top>
        <MainText>
          <h1 className="bg-red-200">Welcome</h1>
        </MainText>
      </Top>
      <Middle>
        <SubText>Create a username and start managing your habits!</SubText>
      </Middle>
      <Bottom>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions })
            localStorage.setItem('username', values.username)
            // navigate('/profile')
            actions.setSubmitting(false)
          }}
        >
          {({ touched, errors, values, handleSubmit }) => {
            return (
              <Form className="bg-red-300" onSubmit={handleSubmit}>
                <label htmlFor="username">
                  Username:
                  <Field
                    id="username"
                    name="username"
                    placeholder="Pick a username"
                  />
                </label>

                <button type="submit">Submit</button>
              </Form>
            )
          }}
        </Formik>
      </Bottom>
    </Container>
  )
}
