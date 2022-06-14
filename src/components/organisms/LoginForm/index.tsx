// #region Global Imports
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { LoginFormActions } from "@Actions";
import { Badge , Button, Tooltip } from 'antd';import { SearchOutlined } from '@ant-design/icons';
import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
// #endregion Global Imports

// #region Interface Imports
import { ILoginForm } from './LoginForm'
// #endregion Interface Imports

// #region Local Imports
import { Bottom, Container, MainText, Middle, SubText, Top } from './styled'
// #endregion Local Imports

export const LoginForm: React.FunctionComponent<ILoginForm.IProps> = (
  _props: ILoginForm.IProps,
) => {
  const initialValues: ILoginForm.LoginFormValues = { username: '' }
  const navigate = useNavigate()

const setTheme = (scopeName) => {
  toggleTheme({
    scopeName,
  });
};
  return (
    <Container>
      <Top>
        <MainText><h1 className="bg-red-200">Welcome</h1></MainText>
      </Top>
      <Middle>
        <SubText>Create a username and start managing your habits!</SubText>
        <SubText><Badge size='small'>Hi</Badge><Button type="primary" onClick={() => 
setTheme('theme-default')}>Light Mode</Button><Button type="primary" onClick={() => 
setTheme('theme-dark')}>Dark Mode</Button></SubText>
      </Middle>
      <Bottom>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions })
            localStorage.setItem('username', values.username)
            navigate('/profile')
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
         <>
    <Tooltip title="search">
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button type="primary" shape="circle">
      A
    </Button>
    <Button type="primary" icon={<SearchOutlined />}>
      Search
    </Button>
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button icon={<SearchOutlined />}>Search</Button>
    <br />
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button icon={<SearchOutlined />}>Search</Button>
    <Tooltip title="search">
      <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button type="dashed" icon={<SearchOutlined />}>
      Search
    </Button>
    <Button icon={<SearchOutlined />} href="https://www.google.com" />
    <br />
    <br />
    <Tooltip title="search">
      <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
    </Tooltip>
    <Button type="primary" shape="circle" size="large">
      A
    </Button>
    <Button type="primary" icon={<SearchOutlined />} size="large">
      Search
    </Button>
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} size="large" />
    </Tooltip>
    <Button icon={<SearchOutlined />} size="large">
      Search
    </Button>
    <br />
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} size="large" />
    </Tooltip>
    <Button icon={<SearchOutlined />} size="large">
      Search
    </Button>
    <Tooltip title="search">
      <Button type="dashed" shape="circle" icon={<SearchOutlined />} size="large" />
    </Tooltip>
    <Button type="dashed" icon={<SearchOutlined />} size="large">
      Search
    </Button>
    <Button icon={<SearchOutlined />} size="large" href="https://www.google.com" />
  </>
      </Bottom>
    </Container>
  )
}
