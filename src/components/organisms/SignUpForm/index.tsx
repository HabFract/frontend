// #region Global Imports
import React from 'react'
import { Field, Form, Formik } from 'formik'
// import { useNavigate } from 'react-router-dom'
// #endregion Global Imports

// #region Interface Imports
import { ISignUpForm } from './types'
// #endregion Interface Imports

// #region Local Imports
import { Bottom, Container, MainText, Middle, SubText, Top } from './styled'
// #endregion Local Imports

export const SignUpForm: React.FunctionComponent<ISignUpForm.IProps> = (
  _props: ISignUpForm.IProps,
) => {
  return (
    <Container>
      <Top></Top>
      <Middle></Middle>
      <Bottom></Bottom>
    </Container>
  )
}
